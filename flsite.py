from flask import (
    Flask,
    g,
    render_template,
    request,
    redirect,
    url_for,
    flash,
    session,
    jsonify)

from flask_sqlalchemy import SQLAlchemy

from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)  # создание веб-приложения

app.secret_key = 'thisismysecretkey'

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'

db = SQLAlchemy(app)


class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    login = db.Column(db.String(20), unique=True)
    name = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(30), unique=True)
    password = db.Column(db.String(15), nullable=False)

    def __repr__(self):
        return f"<users {self.id} {self.login} {self.name} {self.email} {self.password}"


class Routes(db.Model):
    routeid = db.Column(db.Integer, primary_key=True)
    routepoints = db.Column(db.String(500), nullable=False)
    type = db.Column(db.String(10), nullable=False)  # favorites или history
    userid = db.Column(db.Integer, db.ForeignKey('users.id'))

    def __repr__(self):
        return f"routeid: {self.routeid}\nuserid: " \
               f"{self.userid}\ntype: {self.type}\n{[point for point in self.routepoints.split(', ')]}"


@app.before_request
def before_request():
    if 'user_id' in session:
        user = [person for person in Users.query.all() if person.id == session['user_id']][0]
        g.user = user


@app.route("/add_to_history")
def add_to_history():
    a = request.args.get('pnt1', 0, type=str)
    b = request.args.get('pnt2', 0, type=str)
    print(a)
    print(b)
    r = Routes(routepoints=a + ', ' + b,
              type="history",
              userid=g.user.id)
    db.session.add(r)
    db.session.flush()
    db.session.commit()
    return jsonify(result=a + b)




@app.route("/test_template")
def test_template():
    return render_template('test_template.html')


@app.route("/history")
def history():
    routes = [routes for routes in Routes.query.all() if g.user.id == routes.userid and routes.type == "history"]
    print(routes)
    return render_template('history.html', title="История поиска", option=routes)


@app.route("/favorites")
def favorites():
    return render_template('favorites.html', title='Мои маршруты')


@app.route("/", methods=['GET'])
@app.route("/index", methods=['GET'])
def index():
    lk_block_dict = {'lk_block_1': ["Мои маршруты", "Перейти", 2, "menu_block_1", 1, url_for('favorites')],
                     'lk_block_2': ["История поиска", "Открыть", 1, "menu_block_2", 2, url_for('history')]}
    if request.method == 'GET':
        pass
    return render_template('index.html', title="Основная страница", option=lk_block_dict)


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        session.pop('user_id', None)
        login = request.form.get('login')
        password = request.form.get('password')

        user = [person for person in Users.query.all() if person.email == login or person.login == login][0]

        if not user:
            print('пользователя не существует', user)
            flash(message="Пользователя с данным логином не существует.", category="message")
            return redirect(url_for('login'))
        elif not check_password_hash(user.password, password):
            print('Пароль неверный')
            flash(message="Введён неверный пароль.", category="message")
            return redirect(url_for('login'))
        else:
            session['user_id'] = user.id
            return redirect(url_for('index'))
    return render_template('login.html')


@app.route("/registration", methods=['GET', 'POST'])
def registration():
    if request.method == 'POST':
        if any([True if person.email == request.form.get('email') else False for person in Users.query.all()]):
            flash(message="Пользователь с такой почтой уже существует", category="message")
        elif any([True if person.login == request.form.get('login') else False for person in Users.query.all()]):
            flash(message="Пользователь с таким логином уже существует", category="message")
        elif len(request.form.get('login')) < 5:
            flash(message="Длина логина не может быть меньше 5 символов", category="message")
        elif len(request.form.get('password')) != len(request.form.get('repeatpassword')):
            flash(message="Введённые пароли не совпадают", category="message")
        elif not request.form.get('check_policy'):
            flash(message="Вы не приняли условия согласшения и политику конфиденциальности", category="message")
        else:
            try:
                hash = generate_password_hash(request.form.get('password'))
                u = Users(login=request.form.get('login'),
                          name=request.form.get('name'),
                          email=request.form.get('email'),
                          password=hash)
                db.session.add(u)
                db.session.flush()
                db.session.commit()
                return redirect(url_for('login'))
            except:
                db.session.rollback()
                flash(message="Ошибка базы данных. Попробуйте повторить регистрацию позже.", category="message")
                return redirect(url_for("registration"))
    return render_template('registration.html')


@app.route('/change_password', methods=['GET', 'POST'])
def change_password():
    # Страница с восстановлением пароля
    return render_template('change_password.html')


@app.route('/password_send', methods=['GET', 'POST'])
def password_send():
    if request.method == 'POST':
        return redirect(url_for('login'))
    # Страница с сообщением что новый пароль отправлен на почту
    return render_template('password_send.html')


@app.route('/delete_account', methods=['GET', 'POST'])
def delete_account():
    # Страница с удалением аккаунта
    return render_template('delete_account.html')


@app.route('/politics')
def politics():
    return render_template('politics.html')


@app.route('/terms')
def terms():
    return render_template('terms.html')


#
# @app.route("/main_page/<check>&<valuelogin>")
# def main_page(check, valuelogin):
#     print(check)
#     print(valuelogin)
#     return render_template('index.html', title="Основная страница", checklogin=check, login=valuelogin)
#
#
# @app.route("/db_error")
# def db_error():
#     return '''
#     <h1><center>Произошла ошибка при регистрации нового пользователя.
#     Не расстраивайтесь и попробуйте зарегистрироваться ещё раз позже.</center></h1>
#     '''
#
# @app.route("/registration", methods=['post', 'get'])
# def registration():
#     if request.method == 'POST':
#         res = Users.query.all()
#         checked = True
#         for person in res:
#             if person.email == request.form.get('email'):
#                 flash(message="Пользователь с таким логином уже существует", category="message")
#                 checked = False
# #
#         if checked:
#             try:
#                 hash = generate_password_hash(request.form.get('password'))
#                 u = Users(email=request.form.get('email'), password=hash, login=request.form.get('email'))
#                 db.session.add(u)
#                 db.session.flush()
#
#                 # p = Profiles(login=request.form.get('email'), email=request.form.get('email'),
#                 #              id=u.id)
#                 # db.session.add(p)
#                 db.session.commit()
#             except:
#                 db.session.rollback()
#                 return redirect(url_for("db_error"))
#             return redirect(url_for('main_page', check=True, valuelogin=request.form.get('email')))
#
#         # login = request.form.get('email')
#         # print(login)
#     return render_template('registration.html', title="Регистрация")


if __name__ == "__main__":
    app.run(debug=True)  # запуск веб-сервера
