<template>
  <div class="region-wrapper">
    <device-statistics-table class="device-statistics-table" :data="allSeatsData" ref="table"></device-statistics-table>
    <div class="yellow-region">
      <div class="row-1">
        <seat-group
          :seats="seatsData.tableA"
          @edit-seat-info="openEditDialog"
          orientation="horizontal"
          firstSeatPosition="southeast"
        ></seat-group>
        <seat-group
          :seats="seatsData.tableB"
          @edit-seat-info="openEditDialog"
          orientation="horizontal"
          firstSeatPosition="southeast"
        ></seat-group>
        <seat-group
          :seats="seatsData.tableC"
          @edit-seat-info="openEditDialog"
          orientation="horizontal"
          order="counterclockwise"
        ></seat-group>
      </div>
      <div class="row-2">
        <seat-group
          :seats="seatsData.tableD"
          @edit-seat-info="openEditDialog"
          orientation="horizontal"
          firstSeatPosition="southeast"
        ></seat-group>
      </div>
      <div class="row-3">
        <div class="col-1">
          <seat-group
            :seats="seatsData.tableE"
            @edit-seat-info="openEditDialog"
            order="counterclockwise"
            firstSeatPosition="northwest"
          ></seat-group>
        </div>
        <div class="col-2">
          <seat-group
            :seats="seatsData.tableF"
            @edit-seat-info="openEditDialog"
            order="counterclockwise"
            firstSeatPosition="northwest"
          ></seat-group>
          <seat-group
            :seats="seatsData.tableG"
            @edit-seat-info="openEditDialog"
            order="counterclockwise"
            firstSeatPosition="northwest"
          ></seat-group>
          <seat-group
            :seats="seatsData.tableH"
            @edit-seat-info="openEditDialog"
            order="counterclockwise"
            firstSeatPosition="northwest"
          ></seat-group>
        </div>
      </div>
      <seat-info-form ref="dialog" @update-device-statistics="updateDeviceStatistics"></seat-info-form>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import SeatGroup from "./SeatGroup";
import SeatInfoForm from "./SeatInfoForm";
import DeviceStatisticsTable from "./DeviceStatisticsTable";

export default {
  components: {
    "seat-group": SeatGroup,
    "seat-info-form": SeatInfoForm,
    "device-statistics-table": DeviceStatisticsTable
  },
  props: {
    seatsData: {
      type: Object,
      default() {
        return {
          tableA: [],
          tableB: [],
          tableC: [],
          tableD: [],
          tableE: [],
          tableF: [],
          tableG: [],
          tableH: []
        };
      }
    }
  },
  computed: {
    ...mapState(["allSeatsData"])
  },
  methods: {
    openEditDialog(seatInfo) {
      this.$refs["dialog"].handleOpen(seatInfo);
    },
    updateDeviceStatistics() {
      const table = this.$refs["table"];
      table.updateDeviceStatistics(this.allSeatsData, "yellowRegion");
    }
  }
};
</script>

<style scoped>
.region-wrapper {
  position: relative;
}

.device-statistics-table {
  position: absolute;
  left: 10px;
  top: -60px;
}

.yellow-region {
  position: relative;
  padding-top: 100px;
  top: 50px;
  height: 400px;
  margin: 80px 350px;
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  justify-content: space-between;
}

.row-1 {
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
}

.row-3 {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.col-1 {
  margin-left: 180px;
}

.col-2 {
  height: 90px;
  display: flex;
}
</style>
