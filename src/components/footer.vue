<template>
	<div id="ft">
		<div class="ft-box">
			<div class="ft-content">
				<table class="ft-table">
					<tr id="tr1">
						<td class="td1"><div></div></td>
						<td class="td2"><div></div></td>
						<td class="td3">User Story<p/>Choice is more important than effort</td>
						<td class="td4">About Us<p/>Privacy Policy<p/>Common Problems<p/></td>
					</tr>
					<tr id="tr2">
						<td colspan="4">
							Copyright @ 2020-2021 Linse Designed by Linse
						</td>
					</tr>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
export default{
	name: 'ft'
}
</script>

<style>
	#ft{
		background-color: #000000;
	}
	.ft-box {
		font-size: 12px;
		width: 1000px;
		height: 200px;
		margin: 0 auto;
	}
	.ft-content{
		height: 150px;
		padding-top: 3px;
	}
	.ft-table {
		width: 100%;
		color: #EEEEEE;
		text-align: center;
		margin-top: 20px;
	}
	.td1 div, .td2 div{
		width: 110px;
		height: 110px;
		margin-left: 20px;
		border: #00B5AD;
		border-radius: 4px;
		background: url("https://pic.imgdb.cn/item/60abc01a2a0bae8e0ce9b225.png");
		background-size: cover;
	}
	.td3, .td4 {
		width: 25%;
	}
	#tr2 td{
		height: 50px;
		color: #EEEEEE;
		text-align: center;
	}	
</style>
