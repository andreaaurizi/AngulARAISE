# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

admin = {
    :roles_mask => 4,
    :nome => "admin",
    :email => "admin@admin.com",
    :password => "adminadmin",
    :username => "admin",
    :created_at => "2019-08-05 10:19:18",
    :updated_at => "2019-08-05 10:19:18"
}

guerriero = { #ID = 1

    :nome => "guerriero",
    :membri => 0,
    :created_at => "2019-08-05 10:19:18",
    :updated_at => "2019-08-05 10:19:18"
}

elfo= { #ID = 2
    :nome => "elfo",
    :membri => 0,
    :created_at => "2019-08-05 10:19:18",
    :updated_at => "2019-08-05 10:19:18"
}

orco = { #ID = 3
    :nome => "orco",
    :membri => 0,
    :created_at => "2019-08-05 10:19:18",
    :updated_at => "2019-08-05 10:19:18"
}


#DA ELIMINARE SE SI VUOLE AGGIUNGERE ALTRE COSE
User.create!(admin)
Clan.create!(guerriero)
Clan.create!(elfo)
Clan.create!(orco)

User.create!([
    {username: 'Andrea5', name: 'Andrea1', cognome:'Aurizi1', email:'angular5@gmail.com', img_profile: 'guerriero1.jpeg', clan: 'guerriero', password: 'andrea' },
    {username: 'Andrea6', name: 'Andrea2', cognome:'Aurizi2', email:'angular6@gmail.com', img_profile: 'guerriero1.jpeg', clan: 'guerriero', password: 'andrea' }
])



    user.username = auth.info.name
    user.nome = auth.info.first_name
    user.cognome = auth.info.last_name
    user.email = auth.info.email
    user.img_profile = 'guerriero.jpg'
    user.clan = nil
    user.password = Devise.friendly_token[0,20]