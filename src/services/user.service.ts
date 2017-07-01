import { User } from "../models/user.model";

export class UserService {
    static GetUser(): User {
        let user = new User();
        user.Name = "Sergiu Butnarasu";
        return user;
    }
}