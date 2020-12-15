import styled from "styled-components";
import { animatecss, colorBlack, colorBlack2, colorGray3, colorGray4, colorGray5, colorPink, colorPink2, fontPoppins, gap, gap2, gap3, maxWidth } from "../../assets/css";
import iconreplay from "../../assets/images/icon-replay.svg";
import iconcalendar from "../../assets/images/icon-calendar.svg";
import iconuser from "../../assets/images/icon-user.svg";
import iconcomment from "../../assets/images/icon-comment.svg";

export const ContainerBlogDetail = styled.div `
        position: relative;
        margin-top: ${gap};
        color: ${colorBlack2};

    .content {
        text-align: left;
        max-width:${maxWidth};
        padding: 0 15px;
        margin:0 auto;
        text-align:left;
    }
    .paper {
        position: relative;
        padding-left: 90px;
        .big {
            position: absolute;
            left: 0;
            top:0;
            font-size: 80px;
            line-height: 1;
        }
    }
    .wrp-sendmessage {
        margin-bottom: 90px;
        h4 {
            font-family: ${fontPoppins};
            font-size: 18px;
            font-weight: 500;
            color: ${colorBlack};
            position: relative;
            padding-bottom: 10px;
            display: inline-block;
            margin-bottom: ${gap3};
            &::after {
                content: "";
                background: ${colorPink};
                width: 20px;
                height: 3px;
                position: absolute;
                left: 0;
                bottom: 0;
            }
        }	
    }

    section {
        margin-bottom: ${gap2};
    }
    h4 {
        font-size: 20px;
    }
    h3 {
        color: ${colorBlack2};
        font-size: 20px;
    }

    .wrp-postinfo {
	display: block;
	.date {
		background: url(${iconcalendar}) no-repeat left center;
	}
	.user {
		background: url(${iconuser}) no-repeat left center;
	}	
	.value-comments  {
		background: url(${iconcomment}) no-repeat left center;
	}
	.item-postinfo {
		position: relative;
		padding-left: 30px;
		display: inline-block;
		margin-right: 15px;
	}
}

    .sticky {
        position: sticky;
        top: 10px;
    }

    .wrp-userblog {
        display: block;
        border-bottom: ${colorGray3} solid 1px;
        border-top: ${colorGray3} solid 1px;
        position: relative;
        padding-left: 115px;
        margin: ${gap3} 0;
        padding-top: 30px;
        padding-bottom: 30px;
        .imgwrp {
            position: absolute;
            left: 0;
            top: 30px;
            width: 95px;
            height: 95px;
            border-radius: 50%;
            overflow: hidden;
        }
        p {
            margin-bottom: 0;
        }
        h5 {
            font-family: ${fontPoppins};
            font-weight: 500;
            font-size: 18px;
            color: ${colorBlack};
            margin-bottom: 0;
            display: inline-block;
        }
    }

    .wrp-commentblog {
        margin-top: ${gap2};
        border-bottom: ${colorGray3} solid 1px;
        margin-bottom: ${gap2};
        h4 {
            font-family: $fontPoppins;
            font-size: 18px;
            font-weight: 500;
            color: $colorBlack;
            position: relative;
            padding-bottom: 10px;
            display: inline-block;
            &::after {
                content: "";
                background: ${colorPink};
                width: 20px;
                height: 3px;
                position: absolute;
                left: 0;
                bottom: 0;
            }
        }
        .wrp-postinfo {
            display: inline-block;
            margin-left: 15px;
        }
        .wrp-userblog {
            margin-bottom: 0;
            margin-top: 0;
            border-bottom: none;
        }
        .wrp-userblog.sub {
            padding-left: 155px;
                .imgwrp {
                    left: 40px;
                }	
        }
    }
    .replay {
        background: url(${iconreplay}) no-repeat center;
        width: 30px;
        height: 30px;
        text-indent: -9999999999;
        position: relative;
        color: transparent;
        display: inline-block;
        overflow: hidden;
        vertical-align: middle;
        &:hover {
            color: transparent;
        }
    }

    .wrp-sidebar {
        margin-bottom: ${gap};
        .wrp-search {
            position: relative;
            border: ${colorGray3} solid 1px;
            display: block;
            padding: 3px 0;
            margin-bottom: ${gap3};
            input[type="search"], input[type="text"] {
                display: block;
                width: 100%;
                padding-right: 35px;
                padding-left: 15px;			
                border:none;
            }
            input[type="submit"], input[type="button"] {
                position: absolute;
                right: 5px;
                top: 3px;
                border: none;
                background: url("../images/icon-search.svg") no-repeat center;
                z-index: 5;
                width: 25px;
            }
        }
        .tags {
            ul {
                display: block;
                margin-left: 0;
                li {
                    display: inline-block;
                    &:first-child {
                        margin-left: 0;
                    }
                }
            }
        }
    }
	h4.title {
		font-family: ${fontPoppins};
		font-size: 18px;
		font-weight: 500;
		color: ${colorBlack};
		position: relative;
		padding-bottom: 10px;
		display: inline-block;
		margin-bottom: 20px;
		&::after {
			content: "";
			background: ${colorPink};
			width: 20px;
			height: 3px;
			position: absolute;
			left: 0;
			right: auto;
			bottom: 0;
		}
    }

    .wrp-imglate {
        display: flex;
        flex-direction: column;	
        margin-bottom: ${gap3};
        img {
            width: 100%;
        }
        .sub {
            margin-top: 10px;
            display: flex;
            justify-content: space-between;		
        }
    }

    .wrp-archivelist {
        margin-bottom: ${gap3};

    }


`

export const Tags = styled.div `
	margin-bottom: ${gap};
	font-size: 15px;
	ul {
		display: inline-block;
		margin: 0;
		margin-left: 10px;
		line-height: 20px;
		font-size: 12px;
		li {
			display: inline-block;
			margin: 0 4px;
			a {
				display: block;
				background: ${colorPink2};
				border:${colorPink} solid 1px;
				padding: 0px 10px;
                animation:${animatecss};
				:hover {
					animation:${animatecss};
					background: ${colorPink};
					color: #fff;
					text-decoration: none;
				}
			}
		}
	}
`