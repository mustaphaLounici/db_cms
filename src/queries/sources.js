import { gql } from "apollo-boost";

export const GET_DATA_SOURCES = gql`
  {
    data_source {
      Data_Type
      Flag_Behavior
      Flag_Opinion
      Population
      Topic
      Variables
      description
      geo
      geo_detail
      geo_short
      id
      long_name
      periodicity
      re3data
      sample_size_cols
      sample_size_rows
      text
      time_period
      twitter
      url_internal
      url_orig
      wikidata_id
      wikipedia_id
    }
  }
`;

export const GET_DATA_SOURCE = gql`
  query ($id: String = "") {
    data_source_by_pk(id: $id) {
      Data_Type
      Flag_Behavior
      Flag_Opinion
      Population
      Topic
      Variables
      description
      geo
      geo_detail
      geo_short
      id
      long_name
      re3data
      periodicity
      sample_size_cols
      sample_size_rows
      text
      time_period
      twitter
      url_internal
      url_orig
      wikidata_id
      wikipedia_id
    }
  }
`;

// OBJECT keys
// {
//   Data_Type: ""
//   Flag_Behavior: ""
//   Flag_Opinion: ""
//   Population: ""
//   Variables: ""
//   Topic: ""
//   description: ""
//   geo: ""
//   geo_detail: ""
//   geo_short: ""
//   id: ""
//   long_name: ""
//   periodicity: ""
//   sample_size_cols: ""
//   re3data: ""
//   sample_size_rows: ""
//   text: false
//   time_period: ""
//   twitter: ""
//   url_internal: ""
//   url_orig: ""
//   wikidata_id: ""
// }
export const ADD_SOURCE = gql`
  mutation MyMutation(
    $Data_Type: String = ""
    $Flag_Behavior: float8 = null
    $Flag_Opinion: float8 = null
    $Population: String = ""
    $Topic: String = ""
    $Variables: float8 = null
    $geo: String = ""
    $description: String = ""
    $geo_detail: String = ""
    $long_name: String = ""
    $id: String = ""
    $geo_short: String = ""
    $periodicity: String = ""
    $re3data: String = ""
    $sample_size_cols: float8 = null
    $sample_size_rows: float8 = null
    $text: Boolean = false
    $wikipedia_id: String = ""
    $wikidata_id: String = ""
    $url_orig: String = ""
    $url_internal: String = ""
    $twitter: String = ""
    $time_period: String = ""
  ) {
    insert_data_source_one(
      object: {
        Data_Type: $Data_Type
        Flag_Behavior: $Flag_Behavior
        Flag_Opinion: $Flag_Opinion
        Population: $Population
        Topic: $Topic
        description: $description
        geo: $geo
        Variables: $Variables
        geo_detail: $geo_detail
        geo_short: $geo_short
        id: $id
        long_name: $long_name
        periodicity: $periodicity
        re3data: $re3data
        sample_size_cols: $sample_size_cols
        sample_size_rows: $sample_size_rows
        text: $text
        time_period: $time_period
        twitter: $twitter
        url_internal: $url_internal
        url_orig: $url_orig
        wikidata_id: $wikidata_id
        wikipedia_id: $wikipedia_id
      }
    ) {
      id
    }
  }
`;

export const EDIT_DATA_SOURCE = gql`
  mutation MyMutation(
    $Data_Type: String = ""
    $Flag_Behavior: float8 = null
    $Flag_Opinion: float8 = null
    $Population: String = ""
    $Topic: String = ""
    $Variables: float8 = null
    $description: String = ""
    $geo: String = ""
    $geo_detail: String = ""
    $geo_short: String = ""
    $id: String = ""
    $long_name: String = ""
    $periodicity: String = ""
    $re3data: String = ""
    $sample_size_cols: float8 = null
    $sample_size_rows: float8 = null
    $text: Boolean = false
    $time_period: String = ""
    $twitter: String = ""
    $url_internal: String = ""
    $url_orig: String = ""
    $wikidata_id: String = ""
    $wikipedia_id: String = ""
  ) {
    update_data_source_by_pk(
      pk_columns: { id: $id }
      _set: {
        Data_Type: $Data_Type
        Flag_Behavior: $Flag_Behavior
        Flag_Opinion: $Flag_Opinion
        Population: $Population
        wikipedia_id: $wikipedia_id
        wikidata_id: $wikidata_id
        url_orig: $url_orig
        url_internal: $url_internal
        twitter: $twitter
        text: $text
        time_period: $time_period
        sample_size_rows: $sample_size_rows
        sample_size_cols: $sample_size_cols
        re3data: $re3data
        periodicity: $periodicity
        long_name: $long_name
        id: $id
        geo_short: $geo_short
        geo_detail: $geo_detail
        geo: $geo
        description: $description
        Variables: $Variables
        Topic: $Topic
      }
    ) {
      id
    }
  }
`;

export const DELETE_DATA_SOURCE = gql`
  mutation MyMutation($id: String = "") {
    delete_data_source_by_pk(id: $id) {
      id
    }
  }
`;
