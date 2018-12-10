3.times do 
  department = Department.create(
    name: Faker::Commerce.department
  )
  10.times do
    Item.create(
      name: Faker::Commerce.product_name,
      description: Faker::Coffee.notes,
      price: Faker::Commerce.price.to_f,
      department_id: department.id
    )
  end
end

puts "3 departments created"
puts "30 department created"