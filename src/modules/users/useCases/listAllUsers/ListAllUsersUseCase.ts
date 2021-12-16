import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}
class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const loggedUser = this.usersRepository.findById(user_id);

    if (!loggedUser || !loggedUser.admin) {
      throw new Error("Denied");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
