type CourseCardProps = {
  title: string;
  description: string;
  icon: string;
}

export function CourseCard(props: CourseCardProps) {
  return (
    <div className='bg-white px-7 pb-8 rounded-xl'>
      <img src={props.icon} alt="icon" className='-translate-y-1/2' />
      <h3 className='font-extrabold text-xl leading-6'>{props.title}</h3>
      <p className='font-medium text-gray mt-4'>{props.description}</p>
      <a href="" className='inline-block font-bold text-lg leading-7 text-dark-pink mt-6'>Get Started</a>
    </div>
  )
}
