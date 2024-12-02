import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParkingModule } from './parking/parking.module';
import { PaymentdetailsModule } from './paymentdetails/paymentdetails.module';
import { VechicaldetailsModule } from './vechicaldetails/vechicaldetails.module';
import { VechicalentryModule } from './vechicalentry/vechicalentry.module';
import { ParkingslotModule } from './parkingslot/parkingslot.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parking } from './parking/entities/parking.entity';
import { Parkingslot } from './parkingslot/entities/parkingslot.entity';
import { Vechicaldetail } from './vechicaldetails/entities/vechicaldetail.entity';
import { Vechicalentry } from './vechicalentry/entities/vechicalentry.entity';
import { Paymentdetail } from './paymentdetails/entities/paymentdetail.entity';

@Module({
  imports: [
    
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Ganga@123',
      database: 'test',
      entities: [Parking, Parkingslot, Vechicaldetail, Vechicalentry, Paymentdetail],
      synchronize: true,
    }),
    
    ParkingModule, ParkingslotModule, VechicalentryModule, VechicaldetailsModule, PaymentdetailsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
