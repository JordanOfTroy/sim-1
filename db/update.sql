update sim_one_products 
set (product_name, price, image_url)
=($1, $2, $3)
where product_id = $4;

select * from sim_one_products