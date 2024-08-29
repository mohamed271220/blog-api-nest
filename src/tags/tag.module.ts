import { Module } from '@nestjs/common';
import { TagsModule } from './tags.module';

@Module({
  imports: [TagsModule],
})
export class TagModule {}
