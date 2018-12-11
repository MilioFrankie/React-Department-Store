3.times do 
  department = Department.create(
    name: Faker::Commerce.department
  )
end
Department.all.each do
10.times do
  department_id = rand(1..3)
  Item.create(
    name: Faker::Commerce.product_name,
    description: Faker::Cannabis.health_benefit,
    price: Faker::Commerce.price.to_f,
    department_id: department_id
  )
end
end

puts "3 departments created"
puts "30 department created"