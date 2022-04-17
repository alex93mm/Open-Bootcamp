/// <reference types="@adonisjs/application/build/adonis-typings" />
import * as sinkStatic from '@adonisjs/sink';
import { ApplicationContract } from '@ioc:Adonis/Core/Application';
/**
 * Instructions to be executed when setting up the package.
 */
export default function instructions(projectRoot: string, app: ApplicationContract, sink: typeof sinkStatic): Promise<void>;
