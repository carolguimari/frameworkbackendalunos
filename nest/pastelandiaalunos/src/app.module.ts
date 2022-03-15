import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Ingrediente } from './pasteis/entities/ingrediente.entity';
import { Pastel } from './pasteis/entities/pastel.entity';
import { Cliente } from './pasteis/entities/cliente.entity';
import { PasteisModule } from './pasteis/pasteis.module';
import { ClientesModule } from './pasteis/clientes.module';
import { PedidoModule } from './pedido/pedido.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'pastelandia-alunos',
      password: 'my-ultra-password',
      database: 'pastelandia-alunos',
      entities: [Pastel, Ingrediente, Cliente],
      synchronize: true,
      logging: true,
    }),
    ClientesModule,
    PasteisModule,
    PedidoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
