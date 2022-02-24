import {Auth} from "../../types/auth";

export const createBody = (form: Auth.Registration.Form): Auth.Registration.Request => ({
	username: form.username,
	password: form.password,
	person: {
		name: form.name,
		age: form.age,
		city: form.city,
		email: form.email,
		surname: form.surname
	}
})