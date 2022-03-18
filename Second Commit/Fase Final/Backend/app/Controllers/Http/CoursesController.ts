import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Course from 'App/Models/Course'
import CourseValidator from 'App/Validators/CourseValidator'

export default class CoursesController {
  public async index() {
    const courses = await Course.query().preload('themes')

    return courses
  }

  public async store({ request, auth, response }: HttpContextContract) {
    const validatedData = await request.validate(CourseValidator)

    const course = await Course.create(validatedData)

    return course

    // await course.preload('themes')
  }

  public async show({ params }: HttpContextContract) {
    const course = await Course.query().where('id', params.id).preload('themes').firstOrFail()
    return course
  }
}
