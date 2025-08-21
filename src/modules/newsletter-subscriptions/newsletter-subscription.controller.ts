import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NewsletterSubscriptionService } from './newsletter-subscription.service';
import { NewsletterSubscriptionDto } from './dto/newsletter-subscription.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('newsletter-subscriptions')
@Controller('newsletter-subscriptions')
export class NewsletterSubscriptionController {
  constructor(private readonly service: NewsletterSubscriptionService) {}

  @Post()
  @ApiOperation({ summary: 'Criar nova inscrição na newsletter' })
  @ApiResponse({ status: 201, description: 'Inscrição criada com sucesso.' })
  async create(
    @Body() data: Omit<NewsletterSubscriptionDto, 'id' | 'subscribedAt' | 'unsubscribedAt'>,
  ) {
    return this.service.create(data);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as inscrições' })
  async findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter uma inscrição pelo ID' })
  async findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar uma inscrição pelo ID' })
  async update(
    @Param('id') id: string,
    @Body() data: Partial<Omit<NewsletterSubscriptionDto, 'id' | 'subscribedAt' | 'unsubscribedAt'>>,
  ) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover uma inscrição pelo ID' })
  async remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
