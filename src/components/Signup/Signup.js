import React, { useRef, useState } from "react";
import NavbarOther from "../NavbarOther/NavbarOther";

function Signup() {
	//to add alert when adding data to db is successful
	const [isSuccess, setIsSuccess] = useState(false);
	const [isError, setIsError] = useState(false);

	//Created object Stateful Variable
	const [user, setUser] = useState({
		username: "",
		password: "",
		email: "",
		mobile: "",
	});

	let formRef = useRef();

	let handleUsernameAction = (e) => {
		let newUser = { ...user, username: e.target.value };

		setUser(newUser);
	};

	let handlePasswordAction = (e) => {
		let newUser = { ...user, password: e.target.value };

		setUser(newUser);
	};

	let handleEmailAction = (e) => {
		let newUser = { ...user, email: e.target.value };

		setUser(newUser);
	};

	let handleMobileAction = (e) => {
		let newUser = { ...user, mobile: e.target.value };

		setUser(newUser);
	};

	let registerAction = async () => {
		try {
			//validation
			formRef.current.classList.add("was-validated");
			let formStatus = formRef.current.checkValidity();
			if (!formStatus) {
				return;
			}

			//Primary task of this method is connect to the backend
			let url = `http://localhost:4000/addUser?username=${user.username}&password=${user.password}&email=${user.email}&mobile=${user.mobile}`;

			let res = await fetch(url);
			if (res.status != 200) {
				console.log(res);
				throw new Error("Server Error");
			} else {
				let clearUser = {
					username: "",
					password: "",
					email: "",
					mobile: "",
				};
				setUser(clearUser);
			}
			// setSuccessBox(true);
			// setTimeout(() => setSuccessBox(false), 5000);

			formRef.current.classList.remove("was-validated");

			alert("Success");
			setIsSuccess(true);
		} catch (err) {
			alert(err.message);
			setIsError(true);
		} finally {
			setTimeout(() => {
				setIsSuccess(false);
				setIsError(false);
			}, 3000);
		}
	};

	return (
		<div className="my-img d-flex flex-column">
			<NavbarOther />

			<div className="row justify-content-center flex-grow-1"
            style={{ marginTop: "10%" }}
            >
				<div className="col-sm-12 col-md-6 align-item-center">
					<h1 className="text-center">Sign Up</h1>
					<form ref={formRef} className="needs-validation">
						<input
							type="text"
							className="form-control form-control-lg "
							placeholder="Enter Username"
							value={user.username}
							onChange={handleUsernameAction}
							required
						/>

						<input
							type="password"
							className="form-control form-control-lg mt-2"
							placeholder="Enter Password"
							value={user.password}
							onChange={handlePasswordAction}
							required
						/>

						<input
							type="text"
							className="form-control form-control-lg mt-2"
							placeholder="Enter E-mail"
							value={user.email}
							onChange={handleEmailAction}
							required
						/>
						<input
							type="number"
							className="form-control form-control-lg mt-2"
							placeholder="Enter Mobile Number"
							value={user.mobile}
							onChange={handleMobileAction}
							required
						/>
						<input
							type="button"
							value="Register"
							className="btn btn-secondary w-100 mt-2"
							onClick={registerAction}
						/>

						{/* This message should be displayed only when adding data to DB is successful */}

						{isSuccess && <div className="alert alert-success">Success</div>}
						{isError && <div className="alert alert-danger">Error</div>}
					</form>
				</div>
			</div>
		</div>
	);
}

export default Signup;
