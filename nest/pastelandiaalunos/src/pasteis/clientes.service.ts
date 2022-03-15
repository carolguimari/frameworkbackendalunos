import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brackets, DeleteResult, Repository } from 'typeorm';
import CreateClienteDTO from './dto/createClienteDTO';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente) private ClientesRepository: Repository<Cliente>,
  ) {}

  async save(createClienteDTO: CreateClienteDTO): Promise<void> {
    const cliente = new Cliente();
    cliente.nome = createClienteDTO.nome;
    cliente.email = createClienteDTO.email;

    const clienteCriado = await this.ClientesRepository.save(cliente);
  }

 
}
