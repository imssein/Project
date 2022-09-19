create table diet
(
    diet_id         bigint not null auto_increment,
    created_time    datetime(6),
    modified_time   datetime(6),
    amount          varchar(255),
    memo            varchar(255),
    type            varchar(255),
    vegetarian_type varchar(255),
    member_id       bigint,
    primary key (diet_id)
) engine = InnoDB;

create table diet_uploadfile
(
    diet_uploadfile_id bigint not null auto_increment,
    created_time       datetime(6),
    modified_time      datetime(6),
    original_file_name varchar(255),
    saved_file_name    varchar(255),
    diet_id            bigint,
    primary key (diet_uploadfile_id)
) engine = InnoDB;

create table hash_tag
(
    hashtag_id bigint not null auto_increment,
    value      varchar(255),
    post_id    bigint,
    primary key (hashtag_id)
) engine = InnoDB;

create table likes
(
    like_id       bigint not null auto_increment,
    created_time  datetime(6),
    modified_time datetime(6),
    member_id     bigint,
    post_id       bigint,
    store_id      bigint,
    primary key (like_id)
) engine = InnoDB;

create table member
(
    member_id       bigint not null auto_increment,
    created_time    datetime(6),
    modified_time   datetime(6),
    email           varchar(255),
    name            varchar(255),
    nickname        varchar(255),
    password        varchar(255),
    role            varchar(255),
    vegetarian_type varchar(255),
    primary key (member_id)
) engine = InnoDB;

create table menu
(
    menu_id  bigint not null auto_increment,
    value    varchar(255),
    store_id bigint,
    primary key (menu_id)
) engine = InnoDB;

create table post
(
    post_id       bigint not null auto_increment,
    created_time  datetime(6),
    modified_time datetime(6),
    content       varchar(255),
    title         varchar(255),
    member_id     bigint,
    primary key (post_id)
) engine = InnoDB;

create table post_uploadfile
(
    post_uploadfile_id bigint not null auto_increment,
    created_time       datetime(6),
    modified_time      datetime(6),
    original_file_name varchar(255),
    saved_file_name    varchar(255),
    post_id            bigint,
    primary key (post_uploadfile_id)
) engine = InnoDB;

create table review
(
    review_id     bigint not null auto_increment,
    created_time  datetime(6),
    modified_time datetime(6),
    content       varchar(255),
    star_rating   integer,
    member_id     bigint,
    store_id      bigint,
    primary key (review_id)
) engine = InnoDB;

create table review_uploadfile
(
    review_uploadfile_id bigint not null auto_increment,
    created_time         datetime(6),
    modified_time        datetime(6),
    original_file_name   varchar(255),
    saved_file_name      varchar(255),
    review_id            bigint,
    primary key (review_uploadfile_id)
) engine = InnoDB;

create table store
(
    store_id      bigint not null auto_increment,
    created_time  datetime(6),
    modified_time datetime(6),
    address       varchar(255),
    category      varchar(255),
    district      varchar(255),
    likes_num     integer,
    name          varchar(255),
    phone_number  varchar(255),
    star_rating   double precision,
    x             double precision,
    y             double precision,
    primary key (store_id)
) engine = InnoDB;

create table store_uploadfile
(
    store_uploadfile_id bigint not null auto_increment,
    created_time        datetime(6),
    modified_time       datetime(6),
    original_file_name  varchar(255),
    saved_file_name     varchar(255),
    store_id            bigint,
    primary key (store_uploadfile_id)
) engine = InnoDB;

create table vegetarian_type
(
    vegetariantype_id bigint not null auto_increment,
    created_time      datetime(6),
    modified_time     datetime(6),
    value             varchar(255),
    store_id          bigint,
    primary key (vegetariantype_id)
) engine = InnoDB;

alter table member
    add constraint UK_mbmcqelty0fbrvxp1q58dn57t unique (email);

alter table diet
    add constraint FK9o446srb6o6fm3lklugo9mq0v
        foreign key (member_id)
            references member (member_id);

alter table diet_uploadfile
    add constraint FKc9abfx5q7brcy4y0gic88pvi7
        foreign key (diet_id)
            references diet (diet_id);

alter table hash_tag
    add constraint FKlat2e95tc01ram34sc46m03p
        foreign key (post_id)
            references post (post_id);

alter table likes
    add constraint FKa4vkf1skcfu5r6o5gfb5jf295
        foreign key (member_id)
            references member (member_id);

alter table likes
    add constraint FKowd6f4s7x9f3w50pvlo6x3b41
        foreign key (post_id)
            references post (post_id);

alter table likes
    add constraint FK3l2vrcxqcq6iersn5td79dmbq
        foreign key (store_id)
            references store (store_id);

alter table menu
    add constraint FK4sgenfcmk1jajhgctnkpn5erg
        foreign key (store_id)
            references store (store_id);

alter table post
    add constraint FK83s99f4kx8oiqm3ro0sasmpww
        foreign key (member_id)
            references member (member_id);

alter table post_uploadfile
    add constraint FKmqyhxd7eam8p8d58iln0wl336
        foreign key (post_id)
            references post (post_id);

alter table review
    add constraint FKk0ccx5i4ci2wd70vegug074w1
        foreign key (member_id)
            references member (member_id);

alter table review
    add constraint FK74d12ba8sxxu9vpnc59b43y30
        foreign key (store_id)
            references store (store_id);

alter table review_uploadfile
    add constraint FK3yewtfck85916xac5f1hcc1b9
        foreign key (review_id)
            references review (review_id);

alter table store_uploadfile
    add constraint FK6eflqt5jld221nselgtsub49a
        foreign key (store_id)
            references store (store_id);

alter table vegetarian_type
    add constraint FK1vgpjrani3ll4sabieyo80m9p
        foreign key (store_id)
            references store (store_id);