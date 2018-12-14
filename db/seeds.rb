5.times do 
  d = Department.create(
    name: Faker::Commerce.department
  )
  16.times do
    i= d.items.create(
      name: Faker::Commerce.product_name,
      description: Faker::Cannabis.health_benefit,
      price: Faker::Commerce.price.to_f,
      )
    end
  end

puts "5 departments created"
puts "16 department created per departments"