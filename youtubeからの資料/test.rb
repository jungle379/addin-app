def registration_data(a_data)
  
  puts '使い先を入力してください'
  name = gets.chomp
  puts '日時を入力してください'
  date = gets.to_i
  puts '金額を入力してください'
  price = gets.to_i

  data = { name: name,date: date, price: price }
  a_data << data

end


def show_data(a_data)
  puts  "当月の収支: #{calculate_price(a_data)}"
  puts '内訳を確認する項目の番号を入力してください'
  index = 1
  a_data.each do |data|
 
  puts "#{index}: #{data[:name]}" 
  index += 1
end
end

  def calculate_price(a_data)
    index = 0
    sum = 0
  while index < 100 do

    sum = "#{a_data[0][:price]}"
    index += 1
  end
  puts sum
end

data = []

  while true do
    puts "番号を入力してください"
    puts "0: データを登録する"
    puts "1: 登録したデータを入力する"
    puts "2: 終了する"
  case gets.to_i
  when 0
    registration_data(data)
  when 1
    show_data(data)
  when 2
    exit
  else
    puts '入力した値は無効です'
  end
end
