import {
  Body,
  Controller,
  Get,
  Post,
  SetMetadata,
  UseGuards,
} from '@nestjs/common';
import { GuardsService } from './guards.service';
import { EcoloGuard } from '../common/guards/ecolo.guard';
import { GreenVehicles } from '../common/decorators/green-vehicles.decorator';

@Controller('guards')
export class GuardsController {
  constructor(private readonly guardsService: GuardsService) {}

  @Get()
  getHello(): string {
    return this.guardsService.getHello();
  }

  @Post('destination')
  @UseGuards(EcoloGuard)
  // @SetMetadata('greenVehicles', ['legs', 'bike', 'horse'])
  @GreenVehicles('legs', 'bike', 'horse')
  travelTo(@Body('vehicle') vehicle: string) {
    return this.guardsService.gethelloVehicle(vehicle);
  }
}
