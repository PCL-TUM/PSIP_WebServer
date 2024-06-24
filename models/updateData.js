const db = require("../connection/dbConnection");

var updateData = {
  updateDataParcel: function (data, callback) {
    let request_by_system_account_depart = data.request_by_system_account_depart;
    let request_by_system_account_id = data.request_by_system_account_id
    let has_image = data.has_image; 
    let image_url = data.image_url;
    let parcel_weight = data.parcel_weight;
    let parcel_description = data.parcel_description;
    let modify_date = data.modify_date;
    let id = data.id;

    return db.query(
      `UPDATE parcel 
       SET REQUEST_BY_SYSTEM_ACCOUNT_DEPART = ?, REQUEST_BY_SYSTEM_ACCOUNT_ID = ?, HAS_IMAGE = ?, IMAGE_URL = ?, PARCEL_WEIGHT = ?, PARCEL_DESCRIPTION = ?, ACTIVE = ?, MODIFY_DATE = ?
       WHERE id = ?`,
      [
        request_by_system_account_depart,
        request_by_system_account_id,
        has_image,
        image_url,
        parcel_weight,
        parcel_description,
        1,
        modify_date,
        id,
      ],
      callback
    );
  },

  updateDataDepartment: function (data, callback) {
    let depart_name = data.depart_name; 
    let create_by = data.create_by;
    let create_date = data.create_date;
    let modify_date = data.modify_date;
    let id = data.id;

    return db.query(
      `UPDATE department 
       SET DEPART_NAME = ?, CREATE_BY = ?, CREATE_DATE = ?, ACTIVE = ?, MODIFY_DATE = ?
       WHERE id = ?`,
      [
        depart_name,
        create_by,
        create_date,
        1,
        modify_date,
        id,
      ],
      callback
    );
  },

  updateDataAccount: function (data, callback) {
    let email = data.email;
    let frist_name = data.frist_name;
    let frist_name_en = data.frist_name_en;
    let last_name = data.last_name;
    let last_name_en = data.last_name_en;
    let telephone = data.telephone;
    let request_by_system_account_depart = data.request_by_system_account_depart;
    let request_by_system_account_role = data.request_by_system_account_role;
    let modify_date = data.modify_date;
    let id = data.id;

    return db.query(
      `UPDATE system_account 
       SET EMAIL = ?, FRIST_NAME = ?, FRIST_NAME_EN = ?, LAST_NAME = ?, LAST_NAME_EN = ?, TELEPHONE = ?, REQUEST_BY_SYSTEM_ACCOUNT_DEPART = ?, REQUEST_BY_SYSTEM_ACCOUNT_ROLE = ?, ACTIVE = ?, MODIFY_DATE = ?
       WHERE id = ?`,
      [
        email,
        frist_name,
        frist_name_en,
        last_name,
        last_name_en,
        telephone,
        request_by_system_account_depart,
        request_by_system_account_role,
        1,
        modify_date,
        id,
      ],
      callback
    );
  },

  updateConfirmParcel: function (data, callback) {
    let confirm_by = data.confirm_by;
    let confirm_date = data.confirm_date;
    let id = data.id;

    return db.query(
      `UPDATE parcel
       SET CONFIRM_BY = ?, CONFIRM_DATE = ?
       WHERE id = ?`,
      [
        confirm_by,
        confirm_date,
        id,
      ],
      callback
    );
  },

}

module.exports = updateData;