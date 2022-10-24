import { Injectable } from '@nestjs/common';

@Injectable()
export class WordService {
  //   constructor() {}

  getWords() {
    return 'From words service';
  }
}
