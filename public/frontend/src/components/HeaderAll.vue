<template>
    <div class="header relative">
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">Brand</a>
                    <button type="button" class="navbar-toggle visible-xs" data-toggle="modal" data-target="#right-menu">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li><a href="#">ANY </a></li>
                        <li><a href="#">ALBA</a></li>
                        <li><a href="#">ARIA</a></li>

                    </ul>

                    <button type="button" class="navbar-toggle pull-right mr-15" data-toggle="modal" data-target="#right-menu">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#">Get Black Nova </a></li>
                        <li><a href="#">Create your keypad </a></li>
                        <li class="ml"><a href="#">Mr Jones </a></li>
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
        </nav>
        <!-- Right Bar Menu -->
        <div class="modal fade" id="right-menu" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <p class="text-right">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    </p>
                    <div class="prl70 pt100">
                        <ul class="list-unstyled menu font20">
                            <li><a href="#">DOWNLOAD</a> </li>
                            <li><a href="#">CONTACT</a> </li>
                            <li><a href="#">NEWS</a> </li>
                            <li><a href="#">ABOUT</a> </li>
                            <hr>
                            <li><a href="#">ACCOUNT SETTINGS</a> </li>
                            <li><a href="#">LOG OUT</a> </li>
                        </ul>
                    </div>



                </div>
            </div>
        </div>

    </div>
</template>

<script>
    require('../assets/css/icheck.css');
    require('../assets/css/iconfont.css');
    require('../assets/css/main.css');

    export default {
        name: 'HeaderAll',

    }
</script>

<style scoped>

</style>