create table category(
    categoryId int(10)primary key auto_increment,
    categoryName varchar(100)not null
    );

create table product(
    pid int(10)primary key auto_increment,product_name varchar(100)not null,
    categoryId int(10),
    foreign key(categoryId)references category(categoryId)
    );
