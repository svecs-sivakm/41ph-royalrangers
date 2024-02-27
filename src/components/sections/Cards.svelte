<script lang="ts">
  import data from "../../data.json";
  import calendar from "../../assets/svg/calendar.svg";
  import phoneImage from "../../assets/svg/phone.svg";
  import location from "../../assets/svg/location.svg";
</script>

<div
  class="justify-center hidden w-full space-y-8 -mt-28 xl:flex transition-all duration-500 absolute buttom-0 left-0"
>
  <div class="container flex justify-center w-full space-x-64">
    <div
      class="flex flex-col items-center flex-1 p-6 space-y-6 text-white bg-red-600 border-b border-red-600 rounded-md shadow-lg"
    >
      <img src={calendar} alt="calendar" class="h-16" />
      <div class="flex flex-col justify-center flex-grow w-full text-center">
        <h5>pravidelné schůzky</h5>
        <h4 class="font-semibold">{data.meeting_date}</h4>
      </div>
    </div>
    <div
      class="flex flex-col items-center flex-1 p-6 space-y-6 text-white bg-orange-600 border-b border-orange-600 rounded-md shadow-lg"
    >
      <img src={phoneImage} alt="calendar" class="h-16" />
      <div class="flex flex-col justify-center flex-grow w-full text-center">
        <h5>hlavní kontakt</h5>
        <h4 class="font-semibold">{data.main_tel}</h4>
      </div>
    </div>
    <div
      class="flex flex-col items-center flex-1 p-6 space-y-6 text-white bg-blue-800 border-b border-blue-800 rounded-md shadow-lg"
    >
      <img src={location} alt="calendar" class="h-16" />
      <div class="flex flex-col justify-center flex-grow w-full text-center">
        <h5>adresa</h5>
        <h4 class="font-semibold">{data.address}</h4>
      </div>
    </div>
  </div>
</div>
