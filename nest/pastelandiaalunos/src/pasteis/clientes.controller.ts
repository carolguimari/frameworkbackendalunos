import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Query,
    Req,
    Res,
  } from '@nestjs/common';
  import { Request, Response } from 'express';
  import CreateClienteDTO from './dto/createClienteDTO';
  import { ClientesService } from './clientes.service';
  
  @Controller('clientes')
  export class ClientesController {
    constructor(private readonly clientesService: ClientesService) {}
  
    @Post()
    async create(@Body() createClienteDTO: CreateClienteDTO): Promise<void> {
      await this.clientesService.save(createClienteDTO);
    }
  
    
  }
  