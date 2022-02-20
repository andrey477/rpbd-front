import {Roles} from "../../constants/roles";

export declare namespace User {
  interface InitState {
    data: {
      user: {
        id: string;
        username: string;
        password: string;
        role: Roles;
        person: {
          id: string;
          name: string;
          surname: string;
          city: string;
          email: string;
          age: number;
        }
      },
      access_token: string;
      refresh_token: string;
      token_type: string;
      expires_in: number;
    }
  }
}