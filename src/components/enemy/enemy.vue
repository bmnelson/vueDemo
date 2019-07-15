<template>
  <div id="page">
    <p>localSum is {{localSum}}</p>
    <CustomDate></CustomDate>
    <li>
      {{enemyName}}
    </li>
    <div
      v-for="(item,index) in list"
      :key="`${index}_key`"
    >
      <label>
        <input
          type="checkbox"
          :name="item.name"
          :value="item.age"
        >{{item.name}}
      </label>
    </div>
    <div>
      <input
        id="name"
        placeholder="enter name"
      />
    </div>
    <div>
      <input
        id="age"
        placeholder="enter age"
        @input="onchange"
      />
      <button @click="addStudent">添加</button>
    </div>
    <li>{{sum}}</li>
    <button @click="add">sum+1</button>
    <el-button @click="showdia">dialog</el-button>
    <pop-dialog
      :title="enemyName"
      :show.sync="show"
      @closeDia="closeDia"
    >
      <form-test ref="form_test"></form-test>
    </pop-dialog>
    <el-input v-model="searchText"></el-input>
    <el-table :data="formData">
      <el-table-column
        prop="contact.tel"
        label="tel"
        width="140"
      >
        <template slot-scope="scope">
          <el-button
            :style="{padding:0}"
            class="up"
          >{{scope.row.contact.tel}}</el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="name"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="contact.source"
        label="contact.source"
      >
        <template slot-scope="scope">
          <el-button>{{scope.row.contact.source}}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div id="form">
      <el-form
        :model="form"
        :label-position="'top'"
      >
        <el-form-item label="国家">
          <el-select v-model="form.country">
            <el-option
              v-for="item in countries"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select v-model="form.province">
            <el-option
              v-for="item in province_selector"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-select v-model="form.city">
            <el-option
              v-for="item in city_selector"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <el-button
      type="primary"
      @click="jqueryTest"
    >jqueryTest</el-button>
    <div id="addFn">addFn</div>
  </div>
</template>
<style>
.el-form--label-top .el-form-item__label {
  padding: 0;
}
</style>
<script>
import CustomDate from "../date/customdate.vue";
import { mapState } from "vuex";
import PopDialog from "@/components/PopDialog";
import FormTest from "@/components/PopDialog/Forms/form_test";
import GlobalData from "./country_city_provice";
import Bus from "@/components/Bus/Bus";
import { debounce, A } from "@/utils/debounce";
import { DepthFirstTraversal, WideTraversal } from "@/utils/traversal";
import SPEvent from "@/utils/subscribeAndPublishMode";

export default {
  name: "enemy",
  components: {
    CustomDate,
    PopDialog,
    FormTest
  },
  data() {
    return {
      result: [],
      enemyName: "Enemy One",
      searchText: "",
      show: false,
      jsonData: [
        {
          name: "狼蛛",
          contact: {
            tel: 212121,
            source: "公司"
          },
          email: "382362623@qq.com",
          children: [
            { name: "狼蛛-1", children: [{ name: "狼蛛-1-1" }] },
            { name: "狼蛛-2" }
          ]
        },
        {
          name: "雷蛇",
          contact: {
            tel: 343434,
            source: "公司"
          },
          email: "112121212@qq.com",
          children: [{ name: "雷蛇-1" }]
        },
        {
          name: "达尔优",
          contact: {
            tel: 111111,
            source: "客户"
          },
          email: "382362623@qq.com",
          children: [{ name: "达尔优-1" }]
        }
      ],
      form: {
        country: "",
        city: "",
        province: ""
      },
      countries: [],
      country: "",
      province: ""
    };
  },
  created() {
    this.country_selector();
  },
  computed: {
    province_selector() {
      let provinces = [];
      GlobalData.Location.CountryRegion.filter((item, index) => {
        if (item.Name === this.form.country) {
          if (GlobalData.Location.CountryRegion[index].State instanceof Array) {
            GlobalData.Location.CountryRegion[index].State.filter(item => {
              provinces.push({ value: item.Name, label: item.label });
            });
          } else if (
            GlobalData.Location.CountryRegion[index].State.City instanceof Array
          ) {
            GlobalData.Location.CountryRegion[index].State.City.filter(item => {
              provinces.push({ value: item.Name, label: item.label });
            });
          } else {
          }
        }
      });
      return provinces;
    },
    city_selector() {
      let cities = [];
      GlobalData.Location.CountryRegion.filter((item, index1) => {
        if (item.Name === this.form.country) {
          if (
            GlobalData.Location.CountryRegion[index1].State instanceof Array
          ) {
            GlobalData.Location.CountryRegion[index1].State.filter(
              (item, index2) => {
                if (item.Name === "北京") {
                  GlobalData.Location.CountryRegion[0].State[0].City.filter(
                    item => {
                      cities.push({ value: item.Name, label: item.label });
                    }
                  );
                }
              }
            );
          } else {
            this.form.city = "";
          }
        }
      });
      return cities;
    },

    formData() {
      return this.jsonData.filter(item => {
        this.eachJson(item);
        let filter = false;
        for (let item in this.result) {
          if (this.result[item] === true) {
            filter = true;
          }
        }
        return this.searchText === "" ? true : filter;
      });
    },
    localSum: () => {
      return 12;
    },
    ...mapState({
      sum: state => state.sum,
      list: state => state.list
    })
  },
  mounted() {
    Bus.$emit("showBrother", "this is my brother");
    DepthFirstTraversal(this.jsonData);
    console.log(WideTraversal(this.jsonData));

    console.log(document.getElementById("page"));

    SPEvent.on("nel", data => {
      console.log(data);
    });
    SPEvent.on("nel", data => {
      console.log(data + "is good");
    });

    SPEvent.emit("nel", "son");
  },
  methods: {
    country_selector() {
      let countries = [];
      GlobalData.Location.CountryRegion.filter(item => {
        countries.push({ value: item.Name, label: item.label });
      });
      this.countries = countries;
    },
    eachJson(json) {
      for (let item in json) {
        if (item === "tel" || item === "source") {
          if (json[item].toString().indexOf(this.searchText) !== -1) {
            this.result[item] = true;
          } else {
            this.result[item] = false;
          }
        }
        if (typeof json == "object") {
          this.eachJson(json[item]);
        }
      }
    },
    add: function() {
      this.$store.commit("increace");
    },
    showdia() {
      this.show = true;
    },
    closeDia() {
      this.show = false;
      this.$refs.form_test.resetForm();
    },
    addStudent: function() {
      console.log(this.$store.state.list);
      let payload = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value
      };
      this.$store.commit("addStudent", payload);
      console.log(this.$store.state.list);
    },
    onchange: debounce(() => {
      console.log(document.getElementById("age").value);
      let c = A();
      c();
    }, 2000),

    jqueryTest() {
      $("#addFn").click(() => {
        console.log("successfully added");
      });
    }
  }
};
</script>