<template>
    <v-tabs >
        <v-tab label="Combined fleet">
            <v-tabs class="innerV-tab">
                <v-tab label="Carrier Task Force">
                    <p>Main (fleet 1):</p>
                    <ul className="ulcombined">
                        <li>Maximum of 2 FBB/BB/BBV</li>
                        <li>Minimum of 2 CVL/CV/CVB</li>
                        <li>Maximum of 4 CVL/CV/CVB</li>
                        <li>SS/SSV cannot be flagship</li>
                    </ul>
                    <p>Escort (fleet 2):</p>
                    <ul className="ulcombined">
                        <li>Exactly 1 CL (CLT/CT does not count)</li>
                        <li>Minimum of 2 DD</li>
                        <li>Maximum of 2 CA/CAV</li>
                        <li>Maximum of 2 FBB or BB/BBV with Fast+ or Fastest speed (no slower BB/BBV allowed)</li>
                        <li>Maximum of 1 CVL (no CV/CVB allowed)</li>
                        <li>Maximum of 1 AV</li>
                        <li>SS/SSV cannot be flagship</li>
                    </ul>
                </v-tab>
                <v-tab label="Surface Task Force">
                    <p>Main (fleet 1):</p>
                    <ul className="ulcombined">
                        <li>Minimum 2 of a combination of CL/CLT/CA/CAV/FBB/BB/BBV</li>
                        <li>Maximum of 1 CV/CVB or 2 CVL</li>
                        <li>Maximum of 4 FBB/BB/BBV</li>
                        <li>Maximum of 4 CA/CAV</li>
                        <li>SS/SSV cannot be flagship</li>
                    </ul>
                    <p>Escort (fleet 2):</p>
                    <ul className="ulcombined">
                        <li>Exactly 1 CL (CLT/CT does not count)</li>
                        <li>Minimum of 2 DD</li>
                        <li>Maximum of 2 FBB or BB/BBV with Fast+ or Fastest speed (no slower BB/BBV allowed)</li>
                        <li>Maximum of 1 CVL (no CV/CVB allowed)</li>
                        <li>Maximum of 1 AV</li>
                        <li>SS/SSV cannot be flagship</li>
                    </ul>
                </v-tab>
                <v-tab label="Transport Escort">
                    <p>Main (fleet 1):</p>
                    <ul className="ulcombined">
                        <li>Minimum of 4 DE/DD</li>
                        <li>Maximum of 1 CVL with ASW stat (e.g., Taiyou)</li>
                        <li>CLT/CA/FBB/BB/CVL (without ASW stat)/CV/CVB/SS/SSV/AR not allowed (other ships can be used)</li>
                    </ul>
                    <p>Escort (fleet 2):</p>
                    <ul className="ulcombined">
                        <li>Minimum of 1 CL/CT (must be flagship)</li>
                        <li>Maximum of 2 CL/CT</li>
                        <li>Minimum of 3 DE/DD</li>
                        <li>Maximum of 2 CA/CAV</li>
                        <li>No other ships allowed</li>
                    </ul>
                </v-tab>
            </v-tabs>
        </v-tab>
        <v-tab label="Winter 2018">
            <img :src="winterFleet" />
        </v-tab>
    </v-tabs>
</template>

<script>
import winterFleet from '../assets/winterFleet.jpg'
export default {
    name: "Event",
    data() {
        return {
            winterFleet: winterFleet
        }
    }
}
</script>


<style>
.v-tab{
    width:60%;
}

.v-tab-tabs {
    margin-bottom: 20px;
}

.innerV-tab {
    width: 100%;
}
</style>
