import { Module } from '@nestjs/common';
import { NamesModule } from './names/names.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [NamesModule, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [],
  providers: [],
})
export class AppModule {}
