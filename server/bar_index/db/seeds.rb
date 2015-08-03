User.create!(name: "avk",
             email: "avkorneenkov@gmail.com",
             password: "123456",
             password_confirmation: "123456", permission_level: 1,
             activated: true, activated_at: Time.zone.now)
             
User.create!(name: "test",
             email: "test@example.com",
             password: "123456",
             password_confirmation: "123456", permission_level: 3,
             activated: true, activated_at: Time.zone.now)
             
User.create!(name: "test",
             email: "test2@example.com",
             password: "123456",
             password_confirmation: "123456", permission_level: 2)