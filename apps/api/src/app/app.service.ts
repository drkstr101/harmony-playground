import { Injectable } from "@nestjs/common"

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: "Please enjoy your stay." }
  }
}
