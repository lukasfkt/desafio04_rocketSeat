import { Request, Response } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const {email, name} = request.body;
    try{
      this.createUserUseCase.execute({email,name});
      return response.status(201).send();
    }catch (e){
      return response.status(400).json({error: "Failed to create new user"});
    }
  }
}

export { CreateUserController };
