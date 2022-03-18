import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Module from 'App/Models/Module';

export default class ModulesController {

  public async index(ctx: HttpContextContract) {

    const modules = await Module
    .query()
    .preload('discusses', (discuss) => {
      discuss.orderBy('pinned', 'desc');
    })

    return modules;
  }

}
