<template>
    <div class="common-layout">
        <el-container>
            <el-header
                style="
                    /* background-color: aquamarine; */
                    border-bottom: 1px solid #ddd;
                "
            >
                <el-row
                    align="middle"
                    style="height: 100%"
                >
                    <el-col :span="2"></el-col>
                    <el-col :span="2">这里是标题栏</el-col>
                    <el-col :span="2"></el-col>
                    <el-col :span="2">以后可以放一些快捷工具和登录</el-col>
                    <el-col :span="16"></el-col>
                </el-row>
            </el-header>
            <el-main
                style="
                    display: flex;
                    justify-content: center;
                    align-items: center;
                "
            >
                <div
                    style="
                        border: 1px solid #ddd;
                        margin: 20px;
                        padding: 20px;
                        min-width: 50%;
                    "
                >
                    <slot />
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script setup>

</script>