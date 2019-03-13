<template>
    <el-container style="min-height:97vh">
        <el-header style="text-align:center;border-bottom:1px solid grey;" ><h3>ERP Web Report</h3></el-header>
        <el-container>
            <el-aside>
                <el-menu router :default-active="$route.path">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-menu"></i>一般查询</template>
                        <el-menu-item-group>
                            <el-menu-item index="/layout/search">物料查询</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>
              <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {

}
</script>

<style>

</style>
