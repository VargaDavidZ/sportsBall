import { Injectable } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PlayerService {



  db: PrismaService

  constructor(db: PrismaService)
  {
    this.db = db
  }


  create(createPlayerDto: CreatePlayerDto) {
    return this.db.player.create({
      data:createPlayerDto
    })
  }

  findAll() {
    return this.db.player.findMany()
  }

  findOne(id: number) {
    return this.db.player.findUnique({
      where: {id}
    })
  }

  update(id: number, updatePlayerDto: UpdatePlayerDto) {
    return `This action updates a #${id} player`;
  }

  remove(id: number) {
    return `This action removes a #${id} player`;
  }
}
