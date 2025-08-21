import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { PrismaService } from '../../common/prisma/prisma.service';

@Module({
  controllers: [OrderController],
  providers: [OrderService, PrismaService],
  exports: [OrderService],
})
export class OrderModule {}
