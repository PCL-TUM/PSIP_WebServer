const db = require("../connection/dbConnection");

var insertData = {
  insertDataParcel: function (data, callback) {
    let request_by_system_account_depart = data.request_by_system_account_depart;
    let request_by_system_account_id = data.request_by_system_account_id
    let has_image = data.has_image; 
    let image_url = data.image_url;
    let parcel_weight = data.parcel_weight;
    let parcel_description = data.parcel_description;
    let create_by = data.create_by;
    let create_date = data.create_date;
    let upload_date = data.create_date;
    let modify_date = data.modify_date;

    return db.query(
      `INSERT INTO parcel (REQUEST_BY_SYSTEM_ACCOUNT_DEPART, REQUEST_BY_SYSTEM_ACCOUNT_ID, HAS_IMAGE, IMAGE_URL, PARCEL_WEIGHT, PARCEL_DESCRIPTION, CREATE_BY, CREATE_DATE, ACTIVE, UPLOAD_DATE, MODIFY_DATE)
      VALUES (?,?,?,?,?,?,?,?,?,?)`,
      [
        request_by_system_account_depart,
        request_by_system_account_id,
        has_image,
        image_url,
        parcel_weight,
        parcel_description,
        create_by,
        create_date,
        1,
        upload_date,
        modify_date,
      ],
      callback
    );
  },

  insertDataDepartment: function (data, callback) {
    let depart_name = data.depart_name; 
    let key_word = data.key_word;
    let key_word_en = data.key_word_en;
    let create_by = data.create_by;
    let create_date = data.create_date;
    let modify_date = data.modify_date;

    return db.query(
      `INSERT INTO department (DEPART_NAME, KEY_WORD, KEY_WORD_EN, CREATE_BY, CREATE_DATE, ACTIVE, MODIFY_DATE)
      VALUES (?,?,?,?,?,?,?)`,
      [
        depart_name,
        key_word,
        key_word_en,
        create_by,
        create_date,
        1,
        modify_date,
      ],
      callback
    );
  },

  insertDataAccount: function (data, callback) {
    let email = data.email;
    let frist_name = data.frist_name;
    let frist_name_en = data.frist_name_en;
    let last_name = data.last_name;
    let last_name_en = data.last_name_en;
    let telephone = data.telephone;
    let request_by_system_account_depart = data.request_by_system_account_depart;
    let request_by_system_account_role = data.request_by_system_account_role;
    let create_by = data.create_by;
    let create_date = data.create_date;
    let modify_date = data.modify_date;

    return db.query(
      `INSERT INTO system_account (EMAIL, FRIST_NAME, FRIST_NAME_EN, LAST_NAME, LAST_NAME_EN, TELEPHONE, REQUEST_BY_SYSTEM_ACCOUNT_DEPART, REQUEST_BY_SYSTEM_ACCOUNT_ROLE, CREATE_BY, CREATE_DATE, ACTIVE, MODIFY_DATE)
      VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`,
      [
        email,
        frist_name,
        frist_name_en,
        last_name,
        last_name_en,
        telephone,
        request_by_system_account_depart,
        request_by_system_account_role,
        create_by,
        create_date,
        1,
        modify_date,
      ],
      callback
    );
  },
}

module.exports = insertData;
