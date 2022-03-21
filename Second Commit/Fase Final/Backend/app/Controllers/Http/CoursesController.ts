import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Course from 'App/Models/Course'
import CourseValidator from 'App/Validators/CreateCourseValidator'

export default class CoursesController {
  public async index({ response }: HttpContextContract) {
    const courses = await Course.query().preload('themes')

    return response.ok({ data: courses })
  }

  public async store({ request, auth, response }: HttpContextContract) {
    const validatedData = await request.validate(CourseValidator)

    const course = await Course.create(validatedData)

    return response.created({ data: course })

    // await course.preload('themes')
  }

  public async show({ params, response }: HttpContextContract) {
    const course = await Course.query().where('id', params.id).preload('themes').firstOrFail()
    return response.ok({ data: course })
  }
}
