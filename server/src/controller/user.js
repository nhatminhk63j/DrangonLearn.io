const { handleSuccess, handleError } = require('../respone');
var bcrypt = require('bcryptjs');
const User = require('../model/user');

module.exports.create = async (req, res, next) => {
	let email = req.body.email;
	let name = req.body.name;
	let password = req.body.password;

	await User.findOne({ email: email }, (err, user) => {
		if (err) return handleError(res, 'Lỗi tìm tài khoản');
		else if (user) return handleError(res, 'Đã tồn tại tài khoản');
	});

	let passwordHash = bcrypt.hashSync(password, 10);

	let user = new User({
		email: email,
		name: name,
		password: passwordHash
	});

	try {
		await user.save();
		handleSuccess(res, 'Tạo tài khoản thành công', user);
	} catch (error) {
		handleError(res, 'Lỗi save user');
	}
};


module.exports.login = async (req, res) => {
	let email = req.body.email;
	let password = req.body.password;

	await User.findOne({ email: email }, (err, user) => {
		if (err) return handleError(res, 'Lỗi ở tìm user');
		else if (!user) return handleError(res, 'Bạn chưa đăng ký !');
		else {
			try {
				if (bcrypt.compareSync(password, user.password)) {
					return handleSuccess(res, 'Đăng nhập thành công', users);
				} else {
					return handleError(res, 'Nhầm mật khẩu');
				}
			} catch(error){
				return handleError(res, error.message);
			}
    }
	});

};