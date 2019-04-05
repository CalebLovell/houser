create table Houses (
    Property_name varchar,
    Address varchar,
    City varchar,
    State varchar,
    ZIP integer,
    id serial
);

insert into Houses (Property_name, Address, City, state, ZIP)
values ('Mansion', 'road7', 'SLC', 'UT', 84123);