import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Course from 'App/Models/Course'

export default class CourseSeeder extends BaseSeeder {
  public async run() {
    await Course.createMany([
      {
        name: 'Angular',
        image: 'src/resources/angular.svg',
      },
      {
        name: 'ReactJS',
        image: 'src/resources/reactjs.svg',
      },
      {
        name: 'Spring',
        image: 'src/resources/spring.svg',
      },
      {
        name: 'Azure',
        image: 'src/resources/azure-2.svg',
      },
      {
        name: 'Git',
        image: 'src/resources/git.svg',
      },
      {
        name: 'Java',
        image: 'src/resources/java.svg',
      },
      {
        name: 'JavaScript',
        image: 'src/resources/javascript.svg',
      },
    ])
  }
}
