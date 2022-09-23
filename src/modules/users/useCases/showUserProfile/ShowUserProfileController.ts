import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const {user_id} = request.params;
    try{
      const userFound = this.showUserProfileUseCase.execute({user_id});
      return response.status(200).json(userFound);
    }catch(e){
      return response.status(404).json({error:"User not found"});
    }
  }
}

export { ShowUserProfileController };
