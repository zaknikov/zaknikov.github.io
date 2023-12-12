TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "vfov": 180,
  "thumbnailUrl": "media/panorama_55F16605_5968_9D54_41CF_27A8E3F9A778_t.jpg",
  "hfovMax": 120,
  "id": "panorama_55F16605_5968_9D54_41CF_27A8E3F9A778",
  "pitch": 0,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_55F16605_5968_9D54_41CF_27A8E3F9A778_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2000,
       "class": "ImageResourceLevel",
       "width": 4000,
       "url": "media/panorama_55F16605_5968_9D54_41CF_27A8E3F9A778_hq.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "areas": [
       {
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "toolTip": "SALLE A MANGER",
        "click": "this.startPanoramaWithCamera(this.panorama_54164A57_596B_75F4_41B0_84DA64554815, this.camera_4A304DD7_5A5E_9740_41D4_3175949894F4); this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_55F17606_5968_9D54_41D2_3D07746F9569",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 19.01,
        "yaw": 89.52,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 106,
           "class": "ImageResourceLevel",
           "width": 105,
           "url": "media/panorama_55F16605_5968_9D54_41CF_27A8E3F9A778_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": 1.83
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": 89.52,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 19.01,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 212,
           "class": "ImageResourceLevel",
           "width": 211,
           "url": "media/panorama_55F16605_5968_9D54_41CF_27A8E3F9A778_0_HS_0_0.png"
          }
         ]
        },
        "pitch": 1.83
       }
      ]
     },
     {
      "areas": [
       {
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "toolTip": "ENTREE",
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_55F10606_5968_9D54_41CF_9D4D6732F481",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 10.63,
        "yaw": -89.09,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 36,
           "class": "ImageResourceLevel",
           "width": 66,
           "url": "media/panorama_55F16605_5968_9D54_41CF_27A8E3F9A778_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -27.57
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": -89.09,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 10.63,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 72,
           "class": "ImageResourceLevel",
           "width": 133,
           "url": "media/panorama_55F16605_5968_9D54_41CF_27A8E3F9A778_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -27.57
       }
      ]
     },
     {
      "areas": [
       {
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "toolTip": "CUISINE",
        "click": "this.mainPlayList.set('selectedIndex', 17)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_55F12606_5968_9D54_4182_9C162BB3D73D",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 19.02,
        "yaw": -69.25,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 106,
           "class": "ImageResourceLevel",
           "width": 105,
           "url": "media/panorama_55F16605_5968_9D54_41CF_27A8E3F9A778_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "pitch": 0.07
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": -69.25,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 19.02,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 212,
           "class": "ImageResourceLevel",
           "width": 211,
           "url": "media/panorama_55F16605_5968_9D54_41CF_27A8E3F9A778_0_HS_2_0.png"
          }
         ]
        },
        "pitch": 0.07
       }
      ]
     },
     {
      "areas": [
       {
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "toolTip": "COULOIR",
        "click": "this.mainPlayList.set('selectedIndex', 8)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_55F1D606_5968_9D54_41C6_CA367373B5F7",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 18.96,
        "yaw": -118.74,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 106,
           "class": "ImageResourceLevel",
           "width": 105,
           "url": "media/panorama_55F16605_5968_9D54_41CF_27A8E3F9A778_0_HS_3_0_0_map.gif"
          }
         ]
        },
        "pitch": 4.59
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": -118.74,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 18.96,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 212,
           "class": "ImageResourceLevel",
           "width": 211,
           "url": "media/panorama_55F16605_5968_9D54_41CF_27A8E3F9A778_0_HS_3_0.png"
          }
         ]
        },
        "pitch": 4.59
       }
      ]
     },
     {
      "areas": [
       {
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "toolTip": "SALON",
        "click": "this.startPanoramaWithCamera(this.panorama_542012C6_596B_7AD4_41D2_397AF6E32719, this.camera_4A218DB8_5A5E_97C0_41CE_D762E2575938); this.mainPlayList.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_55F1F606_5968_9D54_41CC_3378CC22C549",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 22.86,
        "yaw": 166.31,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 120,
           "class": "ImageResourceLevel",
           "width": 127,
           "url": "media/panorama_55F16605_5968_9D54_41CF_27A8E3F9A778_0_HS_4_0_0_map.gif"
          }
         ]
        },
        "pitch": -1.21
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": 166.31,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 22.86,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 240,
           "class": "ImageResourceLevel",
           "width": 254,
           "url": "media/panorama_55F16605_5968_9D54_41CF_27A8E3F9A778_0_HS_4_0.png"
          }
         ]
        },
        "pitch": -1.21
       }
      ]
     }
    ]
   }
  ],
  "hfovMin": 109,
  "hfov": 360,
  "class": "Panorama",
  "label": "Salle a manger",
  "partial": false,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "vfov": 180,
     "thumbnailUrl": "media/panorama_542012C6_596B_7AD4_41D2_397AF6E32719_t.jpg",
     "hfovMax": 120,
     "id": "panorama_542012C6_596B_7AD4_41D2_397AF6E32719",
     "pitch": 0,
     "frames": [
      {
       "thumbnailUrl": "media/panorama_542012C6_596B_7AD4_41D2_397AF6E32719_t.jpg",
       "class": "SphericPanoramaFrame",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 2000,
          "class": "ImageResourceLevel",
          "width": 4000,
          "url": "media/panorama_542012C6_596B_7AD4_41D2_397AF6E32719_hq.jpeg"
         }
        ]
       },
       "overlays": [
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_577A6E3C_5969_6DB4_41B0_46BAD85F8406, this.camera_4AD6FC64_5A5E_9540_41A3_D745E9BB19C5); this.mainPlayList.set('selectedIndex', 7)"
          }
         ],
         "id": "overlay_542002C6_596B_7AD4_41D3_4687AE689B19",
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 11.14,
           "yaw": -162.07,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 40,
              "class": "ImageResourceLevel",
              "width": 73,
              "url": "media/panorama_542012C6_596B_7AD4_41D2_397AF6E32719_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -32.72
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "yaw": -162.07,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 11.14,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 80,
              "class": "ImageResourceLevel",
              "width": 147,
              "url": "media/panorama_542012C6_596B_7AD4_41D2_397AF6E32719_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -32.72
          }
         ]
        },
        {
         "areas": [
          {
           "mapColor": "#FF0000",
           "displayTooltipInTouchScreens": true,
           "toolTip": "SALLE A MANGER",
           "click": "this.startPanoramaWithCamera(this.panorama_55F16605_5968_9D54_41CF_27A8E3F9A778, this.camera_4AC95C51_5A5E_9540_41A2_8B9607DAF698); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_5423E2C6_596B_7AD4_41CD_48B2C02A3C4B",
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 17.19,
           "yaw": -8.6,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 96,
              "class": "ImageResourceLevel",
              "width": 95,
              "url": "media/panorama_542012C6_596B_7AD4_41D2_397AF6E32719_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -3.55
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "yaw": -8.6,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 17.19,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 192,
              "class": "ImageResourceLevel",
              "width": 191,
              "url": "media/panorama_542012C6_596B_7AD4_41D2_397AF6E32719_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -3.55
          }
         ]
        },
        {
         "areas": [
          {
           "mapColor": "#FF0000",
           "displayTooltipInTouchScreens": true,
           "toolTip": "COULOIR",
           "click": "this.mainPlayList.set('selectedIndex', 9)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_5423B2C6_596B_7AD4_41C0_CD8A834D4521",
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 15.75,
           "yaw": -136.2,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 97,
              "class": "ImageResourceLevel",
              "width": 87,
              "url": "media/panorama_542012C6_596B_7AD4_41D2_397AF6E32719_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "pitch": 0.07
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "yaw": -136.2,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 15.75,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 195,
              "class": "ImageResourceLevel",
              "width": 175,
              "url": "media/panorama_542012C6_596B_7AD4_41D2_397AF6E32719_0_HS_2_0.png"
             }
            ]
           },
           "pitch": 0.07
          }
         ]
        }
       ]
      }
     ],
     "hfovMin": 60,
     "hfov": 360,
     "class": "Panorama",
     "label": "Salon",
     "partial": false,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_55F16605_5968_9D54_41CF_27A8E3F9A778",
       "yaw": -8.6,
       "distance": 1,
       "backwardYaw": 166.31
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "vfov": 180,
        "thumbnailUrl": "media/panorama_577A6E3C_5969_6DB4_41B0_46BAD85F8406_t.jpg",
        "hfovMax": 120,
        "id": "panorama_577A6E3C_5969_6DB4_41B0_46BAD85F8406",
        "pitch": 0,
        "frames": [
         {
          "thumbnailUrl": "media/panorama_577A6E3C_5969_6DB4_41B0_46BAD85F8406_t.jpg",
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 2000,
             "class": "ImageResourceLevel",
             "width": 4000,
             "url": "media/panorama_577A6E3C_5969_6DB4_41B0_46BAD85F8406_hq.jpeg"
            }
           ]
          },
          "overlays": [
           {
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000",
              "click": "this.startPanoramaWithCamera(this.panorama_542012C6_596B_7AD4_41D2_397AF6E32719, this.camera_4B456EDB_5A5E_9540_41CA_CBFAEBAB3B40); this.mainPlayList.set('selectedIndex', 3)"
             }
            ],
            "id": "overlay_577A3E3C_5969_6DB4_41C8_D22F7AF512AB",
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 11.46,
              "yaw": -6.82,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 37,
                 "class": "ImageResourceLevel",
                 "width": 70,
                 "url": "media/panorama_577A6E3C_5969_6DB4_41B0_46BAD85F8406_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -25.94
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "yaw": -6.82,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 11.46,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 75,
                 "class": "ImageResourceLevel",
                 "width": 141,
                 "url": "media/panorama_577A6E3C_5969_6DB4_41B0_46BAD85F8406_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -25.94
             }
            ]
           },
           {
            "areas": [
             {
              "mapColor": "#FF0000",
              "displayTooltipInTouchScreens": true,
              "toolTip": "COULOIR",
              "click": "this.startPanoramaWithCamera(this.panorama_5427A89F_596F_9574_41C5_B2DFDFA87BDC, this.camera_4BB6DECB_5A5E_9540_41D1_D36DB839A1F5); this.mainPlayList.set('selectedIndex', 9)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "id": "overlay_577A1E3C_5969_6DB4_41D2_BAD5802CA5E1",
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 16.51,
              "yaw": -96.13,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 92,
                 "class": "ImageResourceLevel",
                 "width": 91,
                 "url": "media/panorama_577A6E3C_5969_6DB4_41B0_46BAD85F8406_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -0.43
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "yaw": -96.13,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 16.51,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 184,
                 "class": "ImageResourceLevel",
                 "width": 183,
                 "url": "media/panorama_577A6E3C_5969_6DB4_41B0_46BAD85F8406_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -0.43
             }
            ]
           },
           {
            "areas": [
             {
              "mapColor": "#FF0000",
              "displayTooltipInTouchScreens": true,
              "toolTip": "SALLE A MANGER",
              "click": "this.mainPlayList.set('selectedIndex', 0)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "id": "overlay_577BFE3C_5969_6DB4_41CD_175AE81A59CB",
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 15.75,
              "yaw": -4.06,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 93,
                 "class": "ImageResourceLevel",
                 "width": 87,
                 "url": "media/panorama_577A6E3C_5969_6DB4_41B0_46BAD85F8406_0_HS_2_0_0_map.gif"
                }
               ]
              },
              "pitch": 0.7
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "yaw": -4.06,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 15.75,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 186,
                 "class": "ImageResourceLevel",
                 "width": 175,
                 "url": "media/panorama_577A6E3C_5969_6DB4_41B0_46BAD85F8406_0_HS_2_0.png"
                }
               ]
              },
              "pitch": 0.7
             }
            ]
           }
          ]
         }
        ],
        "hfovMin": 60,
        "hfov": 360,
        "class": "Panorama",
        "label": "Salon01",
        "partial": false,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "vfov": 180,
           "thumbnailUrl": "media/panorama_5427A89F_596F_9574_41C5_B2DFDFA87BDC_t.jpg",
           "hfovMax": 120,
           "id": "panorama_5427A89F_596F_9574_41C5_B2DFDFA87BDC",
           "pitch": 0,
           "frames": [
            {
             "thumbnailUrl": "media/panorama_5427A89F_596F_9574_41C5_B2DFDFA87BDC_t.jpg",
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 2000,
                "class": "ImageResourceLevel",
                "width": 4000,
                "url": "media/panorama_5427A89F_596F_9574_41C5_B2DFDFA87BDC_hq.jpeg"
               }
              ]
             },
             "overlays": [
              {
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "displayTooltipInTouchScreens": true,
                 "toolTip": "COULOIR",
                 "click": "this.startPanoramaWithCamera(this.panorama_543A0C8F_5968_ED54_41D0_02C284710200, this.camera_552ABC15_5A5E_94C3_419A_33DC25131705); this.mainPlayList.set('selectedIndex', 8)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "id": "overlay_5427C8A0_596F_954C_41D0_4CB17132F61B",
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 10.8,
                 "yaw": -0.41,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 32,
                    "class": "ImageResourceLevel",
                    "width": 63,
                    "url": "media/panorama_5427A89F_596F_9574_41C5_B2DFDFA87BDC_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -19.91
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "yaw": -0.41,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 10.8,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 64,
                    "class": "ImageResourceLevel",
                    "width": 127,
                    "url": "media/panorama_5427A89F_596F_9574_41C5_B2DFDFA87BDC_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -19.91
                }
               ]
              },
              {
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "displayTooltipInTouchScreens": true,
                 "toolTip": "SALON",
                 "click": "this.startPanoramaWithCamera(this.panorama_577A6E3C_5969_6DB4_41B0_46BAD85F8406, this.camera_55344C29_5A5E_94C0_41B0_B5D42A1B5463); this.mainPlayList.set('selectedIndex', 7)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "id": "overlay_5427E8A0_596F_954C_41C4_09895E24EAFC",
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 18.98,
                 "yaw": 71.44,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 106,
                    "class": "ImageResourceLevel",
                    "width": 105,
                    "url": "media/panorama_5427A89F_596F_9574_41C5_B2DFDFA87BDC_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": 3.59
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "yaw": 71.44,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 18.98,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 212,
                    "class": "ImageResourceLevel",
                    "width": 211,
                    "url": "media/panorama_5427A89F_596F_9574_41C5_B2DFDFA87BDC_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": 3.59
                }
               ]
              },
              {
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "displayTooltipInTouchScreens": true,
                 "toolTip": "CHAMBRE 2",
                 "click": "this.startPanoramaWithCamera(this.panorama_545C52F6_5968_9AB4_41C5_FC5D0856755D, this.camera_553EAC3D_5A5E_94C0_41C4_82ADA1C2F3E5); this.mainPlayList.set('selectedIndex', 12)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "id": "overlay_542708A0_596F_954C_4188_C18B9A3681C0",
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 19.02,
                 "yaw": -117.73,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 106,
                    "class": "ImageResourceLevel",
                    "width": 105,
                    "url": "media/panorama_5427A89F_596F_9574_41C5_B2DFDFA87BDC_0_HS_2_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -0.18
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "yaw": -117.73,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 19.02,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 212,
                    "class": "ImageResourceLevel",
                    "width": 211,
                    "url": "media/panorama_5427A89F_596F_9574_41C5_B2DFDFA87BDC_0_HS_2_0.png"
                   }
                  ]
                 },
                 "pitch": -0.18
                }
               ]
              },
              {
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "displayTooltipInTouchScreens": true,
                 "toolTip": "CHAMBRE\u000aINVITE",
                 "click": "this.mainPlayList.set('selectedIndex', 14)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "id": "overlay_542718A0_596F_954C_41D2_D24315817156",
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 19.01,
                 "yaw": -173.5,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 106,
                    "class": "ImageResourceLevel",
                    "width": 105,
                    "url": "media/panorama_5427A89F_596F_9574_41C5_B2DFDFA87BDC_0_HS_3_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": 1.58
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "yaw": -173.5,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 19.01,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 212,
                    "class": "ImageResourceLevel",
                    "width": 211,
                    "url": "media/panorama_5427A89F_596F_9574_41C5_B2DFDFA87BDC_0_HS_3_0.png"
                   }
                  ]
                 },
                 "pitch": 1.58
                }
               ]
              },
              {
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "displayTooltipInTouchScreens": true,
                 "toolTip": "ENTREE",
                 "click": "this.mainPlayList.set('selectedIndex', 2)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "id": "overlay_542738A0_596F_954C_41C8_002A17FE6B10",
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 15.99,
                 "yaw": 0.34,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 89,
                    "class": "ImageResourceLevel",
                    "width": 88,
                    "url": "media/panorama_5427A89F_596F_9574_41C5_B2DFDFA87BDC_0_HS_4_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": 2.08
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "yaw": 0.34,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 15.99,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 178,
                    "class": "ImageResourceLevel",
                    "width": 177,
                    "url": "media/panorama_5427A89F_596F_9574_41C5_B2DFDFA87BDC_0_HS_4_0.png"
                   }
                  ]
                 },
                 "pitch": 2.08
                }
               ]
              }
             ]
            }
           ],
           "hfovMin": 60,
           "hfov": 360,
           "class": "Panorama",
           "label": "Couloire",
           "partial": false,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "vfov": 180,
              "thumbnailUrl": "media/panorama_543A0C8F_5968_ED54_41D0_02C284710200_t.jpg",
              "hfovMax": 120,
              "id": "panorama_543A0C8F_5968_ED54_41D0_02C284710200",
              "pitch": 0,
              "frames": [
               {
                "thumbnailUrl": "media/panorama_543A0C8F_5968_ED54_41D0_02C284710200_t.jpg",
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 2000,
                   "class": "ImageResourceLevel",
                   "width": 4000,
                   "url": "media/panorama_543A0C8F_5968_ED54_41D0_02C284710200_hq.jpeg"
                  }
                 ]
                },
                "overlays": [
                 {
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "displayTooltipInTouchScreens": true,
                    "toolTip": "COULOIR",
                    "click": "this.startPanoramaWithCamera(this.panorama_5427A89F_596F_9574_41C5_B2DFDFA87BDC, this.camera_4A3F4DFB_5A5E_9740_41C1_4700A2188E8F); this.mainPlayList.set('selectedIndex', 9)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "id": "overlay_543A1C8F_5968_ED54_41CF_C64265597FBE",
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 11.42,
                    "yaw": 179.75,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 56,
                       "class": "ImageResourceLevel",
                       "width": 69,
                       "url": "media/panorama_543A0C8F_5968_ED54_41D0_02C284710200_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -24.61
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "yaw": 179.75,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 11.42,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 112,
                       "class": "ImageResourceLevel",
                       "width": 139,
                       "url": "media/panorama_543A0C8F_5968_ED54_41D0_02C284710200_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -24.61
                   }
                  ]
                 },
                 {
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "displayTooltipInTouchScreens": true,
                    "toolTip": "ENTREE",
                    "click": "this.startPanoramaWithCamera(this.panorama_55923054_596B_F5CB_4188_04441B29B772, this.camera_4BCD7E1B_5A5E_94C0_41C4_1D162C859E29); this.mainPlayList.set('selectedIndex', 2)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "id": "overlay_543A6C8F_5968_ED54_41D0_4396D7124578",
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 17.21,
                    "yaw": 7.98,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 96,
                       "class": "ImageResourceLevel",
                       "width": 95,
                       "url": "media/panorama_543A0C8F_5968_ED54_41D0_02C284710200_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": 1.47
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "yaw": 7.98,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 17.21,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 192,
                       "class": "ImageResourceLevel",
                       "width": 191,
                       "url": "media/panorama_543A0C8F_5968_ED54_41D0_02C284710200_0_HS_1_0.png"
                      }
                     ]
                    },
                    "pitch": 1.47
                   }
                  ]
                 },
                 {
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "displayTooltipInTouchScreens": true,
                    "toolTip": "CHAMBRE 1",
                    "click": "this.startPanoramaWithCamera(this.panorama_54292EB4_596F_EAB4_41D2_0B888B056A84, this.camera_4BDDCE3A_5A5E_94C0_41C8_2D117A2968F6); this.mainPlayList.set('selectedIndex', 10)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "id": "overlay_543A5C90_5968_ED4C_41C9_3706FA7F6C10",
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 13.68,
                    "yaw": -143.23,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 90,
                       "class": "ImageResourceLevel",
                       "width": 76,
                       "url": "media/panorama_543A0C8F_5968_ED54_41D0_02C284710200_0_HS_2_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": 5.47
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "yaw": -143.23,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 13.68,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 181,
                       "class": "ImageResourceLevel",
                       "width": 152,
                       "url": "media/panorama_543A0C8F_5968_ED54_41D0_02C284710200_0_HS_2_0.png"
                      }
                     ]
                    },
                    "pitch": 5.47
                   }
                  ]
                 }
                ]
               }
              ],
              "hfovMin": 60,
              "hfov": 360,
              "class": "Panorama",
              "label": "Couloire_01",
              "partial": false,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_5427A89F_596F_9574_41C5_B2DFDFA87BDC",
                "yaw": 179.75,
                "distance": 1,
                "backwardYaw": -0.41
               },
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "vfov": 180,
                 "thumbnailUrl": "media/panorama_55923054_596B_F5CB_4188_04441B29B772_t.jpg",
                 "hfovMax": 120,
                 "id": "panorama_55923054_596B_F5CB_4188_04441B29B772",
                 "pitch": 0,
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_55923054_596B_F5CB_4188_04441B29B772_t.jpg",
                   "class": "SphericPanoramaFrame",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 2000,
                      "class": "ImageResourceLevel",
                      "width": 4000,
                      "url": "media/panorama_55923054_596B_F5CB_4188_04441B29B772_hq.jpeg"
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000",
                       "click": "this.mainPlayList.set('selectedIndex', 0)"
                      }
                     ],
                     "id": "overlay_55920054_596B_F5CB_4196_F2E198EBA1C2",
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 11.36,
                       "yaw": 122.94,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 41,
                          "class": "ImageResourceLevel",
                          "width": 72,
                          "url": "media/panorama_55923054_596B_F5CB_4188_04441B29B772_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -29.08
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "yaw": 122.94,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 11.36,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 83,
                          "class": "ImageResourceLevel",
                          "width": 144,
                          "url": "media/panorama_55923054_596B_F5CB_4188_04441B29B772_0_HS_0_0.png"
                         }
                        ]
                       },
                       "pitch": -29.08
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "displayTooltipInTouchScreens": true,
                       "toolTip": "CUISINE",
                       "click": "this.startPanoramaWithCamera(this.panorama_54DFD5C3_5968_9ECC_41CF_BED9CBB9364C, this.camera_4A4AAD02_5A5E_94C0_41BC_10C3FB8E24EA); this.mainPlayList.set('selectedIndex', 17)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "id": "overlay_55927054_596B_F5CB_41B2_B64D6F653AC4",
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 19,
                       "yaw": -81.81,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 106,
                          "class": "ImageResourceLevel",
                          "width": 105,
                          "url": "media/panorama_55923054_596B_F5CB_4188_04441B29B772_0_HS_1_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": 2.83
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "yaw": -81.81,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 19,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 212,
                          "class": "ImageResourceLevel",
                          "width": 211,
                          "url": "media/panorama_55923054_596B_F5CB_4188_04441B29B772_0_HS_1_0.png"
                         }
                        ]
                       },
                       "pitch": 2.83
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "displayTooltipInTouchScreens": true,
                       "toolTip": "COULOIR",
                       "click": "this.startPanoramaWithCamera(this.panorama_543A0C8F_5968_ED54_41D0_02C284710200, this.camera_4AADBCDA_5A5E_9540_41C3_4C0A9CE3A072); this.mainPlayList.set('selectedIndex', 8)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "id": "overlay_5595B054_596B_F5CB_41AD_7EB8E69DBE78",
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 12.8,
                       "yaw": 178.87,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 60,
                          "class": "ImageResourceLevel",
                          "width": 71,
                          "url": "media/panorama_55923054_596B_F5CB_4188_04441B29B772_0_HS_2_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -2.58
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "yaw": 178.87,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 12.8,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 120,
                          "class": "ImageResourceLevel",
                          "width": 142,
                          "url": "media/panorama_55923054_596B_F5CB_4188_04441B29B772_0_HS_2_0.png"
                         }
                        ]
                       },
                       "pitch": -2.58
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "displayTooltipInTouchScreens": true,
                       "toolTip": "SALON",
                       "click": "this.mainPlayList.set('selectedIndex', 3)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "id": "overlay_5595A054_596B_F5CB_41D3_D3DA3D6A4F28",
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 14.49,
                       "yaw": 131.48,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 83,
                          "class": "ImageResourceLevel",
                          "width": 80,
                          "url": "media/panorama_55923054_596B_F5CB_4188_04441B29B772_0_HS_3_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": 1.33
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "yaw": 131.48,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 14.49,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 167,
                          "class": "ImageResourceLevel",
                          "width": 161,
                          "url": "media/panorama_55923054_596B_F5CB_4188_04441B29B772_0_HS_3_0.png"
                         }
                        ]
                       },
                       "pitch": 1.33
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "displayTooltipInTouchScreens": true,
                       "toolTip": "Toilette",
                       "click": "this.startPanoramaWithCamera(this.panorama_57CFF9CD_596B_96D5_4195_B7E7A126290E, this.camera_4ABB4CEE_5A5E_9540_41B2_AE5B2B3A8498); this.mainPlayList.set('selectedIndex', 18)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "id": "overlay_55958054_596B_F5CB_41D1_9101C40DD365",
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 12.95,
                       "yaw": 10.89,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 76,
                          "class": "ImageResourceLevel",
                          "width": 72,
                          "url": "media/panorama_55923054_596B_F5CB_4188_04441B29B772_0_HS_4_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": 4.47
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "yaw": 10.89,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 12.95,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 153,
                          "class": "ImageResourceLevel",
                          "width": 144,
                          "url": "media/panorama_55923054_596B_F5CB_4188_04441B29B772_0_HS_4_0.png"
                         }
                        ]
                       },
                       "pitch": 4.47
                      }
                     ]
                    }
                   ]
                  }
                 ],
                 "hfovMin": 60,
                 "hfov": 360,
                 "class": "Panorama",
                 "label": "Salle a manger 02",
                 "partial": false,
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_543A0C8F_5968_ED54_41D0_02C284710200",
                   "yaw": 178.87,
                   "distance": 1,
                   "backwardYaw": 7.98
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "vfov": 180,
                    "thumbnailUrl": "media/panorama_57CFF9CD_596B_96D5_4195_B7E7A126290E_t.jpg",
                    "hfovMax": 120,
                    "id": "panorama_57CFF9CD_596B_96D5_4195_B7E7A126290E",
                    "pitch": 0,
                    "frames": [
                     {
                      "thumbnailUrl": "media/panorama_57CFF9CD_596B_96D5_4195_B7E7A126290E_t.jpg",
                      "class": "SphericPanoramaFrame",
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "height": 2000,
                         "class": "ImageResourceLevel",
                         "width": 4000,
                         "url": "media/panorama_57CFF9CD_596B_96D5_4195_B7E7A126290E_hq.jpeg"
                        }
                       ]
                      },
                      "overlays": [
                       {
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "displayTooltipInTouchScreens": true,
                          "toolTip": "ENTREE",
                          "click": "this.startPanoramaWithCamera(this.panorama_55923054_596B_F5CB_4188_04441B29B772, this.camera_4A811C9F_5A5E_95C0_41C0_13A0AB9C048A); this.mainPlayList.set('selectedIndex', 2)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_57CFC9CD_596B_96D5_41B4_9599B8999152",
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        },
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 13.91,
                          "yaw": 165.93,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 78,
                             "class": "ImageResourceLevel",
                             "width": 78,
                             "url": "media/panorama_57CFF9CD_596B_96D5_4195_B7E7A126290E_0_HS_0_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": 8.58
                         }
                        ],
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "yaw": 165.93,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 13.91,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 156,
                             "class": "ImageResourceLevel",
                             "width": 156,
                             "url": "media/panorama_57CFF9CD_596B_96D5_4195_B7E7A126290E_0_HS_0_0.png"
                            }
                           ]
                          },
                          "pitch": 8.58
                         }
                        ]
                       }
                      ]
                     }
                    ],
                    "hfovMin": 120,
                    "hfov": 360,
                    "class": "Panorama",
                    "label": "toilette",
                    "partial": false,
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_55923054_596B_F5CB_4188_04441B29B772",
                      "yaw": 165.93,
                      "distance": 1,
                      "backwardYaw": 10.89
                     }
                    ]
                   },
                   "yaw": 10.89,
                   "distance": 1,
                   "backwardYaw": 165.93
                  },
                  {
                   "class": "AdjacentPanorama",
                   "panorama": {
                    "vfov": 180,
                    "thumbnailUrl": "media/panorama_54DFD5C3_5968_9ECC_41CF_BED9CBB9364C_t.jpg",
                    "hfovMax": 120,
                    "id": "panorama_54DFD5C3_5968_9ECC_41CF_BED9CBB9364C",
                    "pitch": 0,
                    "frames": [
                     {
                      "thumbnailUrl": "media/panorama_54DFD5C3_5968_9ECC_41CF_BED9CBB9364C_t.jpg",
                      "class": "SphericPanoramaFrame",
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "height": 2000,
                         "class": "ImageResourceLevel",
                         "width": 4000,
                         "url": "media/panorama_54DFD5C3_5968_9ECC_41CF_BED9CBB9364C_hq.jpeg"
                        }
                       ]
                      },
                      "overlays": [
                       {
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "displayTooltipInTouchScreens": true,
                          "toolTip": "ENTREE",
                          "click": "this.startPanoramaWithCamera(this.panorama_55923054_596B_F5CB_4188_04441B29B772, this.camera_4BFAEE78_5A5E_9540_41CB_5CCECF51B6A4); this.mainPlayList.set('selectedIndex', 2)",
                          "class": "HotspotPanoramaOverlayArea"
                         }
                        ],
                        "id": "overlay_54DFE5C4_5968_9ED4_41BB_6A770F1D5139",
                        "useHandCursor": true,
                        "data": {
                         "label": "Image"
                        },
                        "class": "HotspotPanoramaOverlay",
                        "rollOverDisplay": false,
                        "maps": [
                         {
                          "class": "HotspotPanoramaOverlayMap",
                          "hfov": 14.4,
                          "yaw": 49.02,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 87,
                             "class": "ImageResourceLevel",
                             "width": 80,
                             "url": "media/panorama_54DFD5C3_5968_9ECC_41CF_BED9CBB9364C_0_HS_0_0_0_map.gif"
                            }
                           ]
                          },
                          "pitch": 1.45
                         }
                        ],
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "yaw": 49.02,
                          "class": "HotspotPanoramaOverlayImage",
                          "hfov": 14.4,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 175,
                             "class": "ImageResourceLevel",
                             "width": 160,
                             "url": "media/panorama_54DFD5C3_5968_9ECC_41CF_BED9CBB9364C_0_HS_0_0.png"
                            }
                           ]
                          },
                          "pitch": 1.45
                         }
                        ]
                       }
                      ]
                     }
                    ],
                    "hfovMin": 60,
                    "hfov": 360,
                    "class": "Panorama",
                    "label": "Cuisine",
                    "partial": false,
                    "adjacentPanoramas": [
                     {
                      "class": "AdjacentPanorama",
                      "panorama": "this.panorama_55923054_596B_F5CB_4188_04441B29B772",
                      "yaw": 49.02,
                      "distance": 1,
                      "backwardYaw": -81.81
                     }
                    ]
                   },
                   "yaw": -81.81,
                   "distance": 1,
                   "backwardYaw": 49.02
                  }
                 ]
                },
                "yaw": 7.98,
                "distance": 1,
                "backwardYaw": 178.87
               },
               {
                "class": "AdjacentPanorama",
                "panorama": {
                 "vfov": 180,
                 "thumbnailUrl": "media/panorama_54292EB4_596F_EAB4_41D2_0B888B056A84_t.jpg",
                 "hfovMax": 120,
                 "id": "panorama_54292EB4_596F_EAB4_41D2_0B888B056A84",
                 "pitch": 0,
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_54292EB4_596F_EAB4_41D2_0B888B056A84_t.jpg",
                   "class": "SphericPanoramaFrame",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 2000,
                      "class": "ImageResourceLevel",
                      "width": 4000,
                      "url": "media/panorama_54292EB4_596F_EAB4_41D2_0B888B056A84_hq.jpeg"
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "displayTooltipInTouchScreens": true,
                       "toolTip": "COULOIR",
                       "click": "this.startPanoramaWithCamera(this.panorama_543A0C8F_5968_ED54_41D0_02C284710200, this.camera_4BA8EEBA_5A5E_95C0_41C2_EA65EC7704BA); this.mainPlayList.set('selectedIndex', 8)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "id": "overlay_54290EB5_596F_EAB4_41D5_30CD362E3EB6",
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 18.99,
                       "yaw": 101.33,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 106,
                          "class": "ImageResourceLevel",
                          "width": 105,
                          "url": "media/panorama_54292EB4_596F_EAB4_41D2_0B888B056A84_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": 3.34
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "yaw": 101.33,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 18.99,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 212,
                          "class": "ImageResourceLevel",
                          "width": 211,
                          "url": "media/panorama_54292EB4_596F_EAB4_41D2_0B888B056A84_0_HS_0_0.png"
                         }
                        ]
                       },
                       "pitch": 3.34
                      }
                     ]
                    },
                    {
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "displayTooltipInTouchScreens": true,
                       "toolTip": "SALLE DE BAIN",
                       "click": "this.mainPlayList.set('selectedIndex', 19)",
                       "class": "HotspotPanoramaOverlayArea"
                      }
                     ],
                     "id": "overlay_54296EB5_596F_EAB4_41CF_FE6C2D521A4F",
                     "useHandCursor": true,
                     "data": {
                      "label": "Image"
                     },
                     "class": "HotspotPanoramaOverlay",
                     "rollOverDisplay": false,
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 14.45,
                       "yaw": 133.24,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 92,
                          "class": "ImageResourceLevel",
                          "width": 80,
                          "url": "media/panorama_54292EB4_596F_EAB4_41D2_0B888B056A84_0_HS_1_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": 4.59
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "yaw": 133.24,
                       "class": "HotspotPanoramaOverlayImage",
                       "hfov": 14.45,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 184,
                          "class": "ImageResourceLevel",
                          "width": 161,
                          "url": "media/panorama_54292EB4_596F_EAB4_41D2_0B888B056A84_0_HS_1_0.png"
                         }
                        ]
                       },
                       "pitch": 4.59
                      }
                     ]
                    }
                   ]
                  }
                 ],
                 "hfovMin": 60,
                 "hfov": 360,
                 "class": "Panorama",
                 "label": "CH_Fille",
                 "partial": false,
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "panorama": "this.panorama_543A0C8F_5968_ED54_41D0_02C284710200",
                   "yaw": 101.33,
                   "distance": 1,
                   "backwardYaw": -143.23
                  }
                 ]
                },
                "yaw": -143.23,
                "distance": 1,
                "backwardYaw": 101.33
               }
              ]
             },
             "yaw": -0.41,
             "distance": 1,
             "backwardYaw": 179.75
            },
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_577A6E3C_5969_6DB4_41B0_46BAD85F8406",
             "yaw": 71.44,
             "distance": 1,
             "backwardYaw": -96.13
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "vfov": 180,
              "thumbnailUrl": "media/panorama_545C52F6_5968_9AB4_41C5_FC5D0856755D_t.jpg",
              "hfovMax": 120,
              "id": "panorama_545C52F6_5968_9AB4_41C5_FC5D0856755D",
              "pitch": 0,
              "frames": [
               {
                "thumbnailUrl": "media/panorama_545C52F6_5968_9AB4_41C5_FC5D0856755D_t.jpg",
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 2000,
                   "class": "ImageResourceLevel",
                   "width": 4000,
                   "url": "media/panorama_545C52F6_5968_9AB4_41C5_FC5D0856755D_hq.jpeg"
                  }
                 ]
                },
                "overlays": [
                 {
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "displayTooltipInTouchScreens": true,
                    "toolTip": "SALLE DE BAIN",
                    "click": "this.mainPlayList.set('selectedIndex', 19)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "id": "overlay_545C72F6_5968_9AB4_419F_F7E318E81BBF",
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 15.75,
                    "yaw": -73.14,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 97,
                       "class": "ImageResourceLevel",
                       "width": 87,
                       "url": "media/panorama_545C52F6_5968_9AB4_41C5_FC5D0856755D_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": 1.07
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "yaw": -73.14,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 15.75,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 195,
                       "class": "ImageResourceLevel",
                       "width": 175,
                       "url": "media/panorama_545C52F6_5968_9AB4_41C5_FC5D0856755D_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": 1.07
                   }
                  ]
                 },
                 {
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "displayTooltipInTouchScreens": true,
                    "toolTip": "COULOIR",
                    "click": "this.startPanoramaWithCamera(this.panorama_5427A89F_596F_9574_41C5_B2DFDFA87BDC, this.camera_4A13AD95_5A5E_97C0_41C8_69AF5A394D0E); this.mainPlayList.set('selectedIndex', 9)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "id": "overlay_545C02F6_5968_9AB4_41BF_6FC4EE500190",
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 16.51,
                    "yaw": 82.74,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 97,
                       "class": "ImageResourceLevel",
                       "width": 91,
                       "url": "media/panorama_545C52F6_5968_9AB4_41C5_FC5D0856755D_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -0.94
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "yaw": 82.74,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 16.51,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 195,
                       "class": "ImageResourceLevel",
                       "width": 183,
                       "url": "media/panorama_545C52F6_5968_9AB4_41C5_FC5D0856755D_0_HS_1_0.png"
                      }
                     ]
                    },
                    "pitch": -0.94
                   }
                  ]
                 }
                ]
               }
              ],
              "hfovMin": 60,
              "hfov": 360,
              "class": "Panorama",
              "label": "CH_G",
              "partial": false,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_5427A89F_596F_9574_41C5_B2DFDFA87BDC",
                "yaw": 82.74,
                "distance": 1,
                "backwardYaw": -117.73
               }
              ]
             },
             "yaw": -117.73,
             "distance": 1,
             "backwardYaw": 82.74
            }
           ]
          },
          "yaw": -96.13,
          "distance": 1,
          "backwardYaw": 71.44
         },
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_542012C6_596B_7AD4_41D2_397AF6E32719",
          "yaw": -6.82,
          "distance": 1,
          "backwardYaw": -162.07
         }
        ]
       },
       "yaw": -162.07,
       "distance": 1,
       "backwardYaw": -6.82
      }
     ]
    },
    "yaw": 166.31,
    "distance": 1,
    "backwardYaw": -8.6
   },
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "vfov": 180,
     "thumbnailUrl": "media/panorama_54164A57_596B_75F4_41B0_84DA64554815_t.jpg",
     "hfovMax": 120,
     "id": "panorama_54164A57_596B_75F4_41B0_84DA64554815",
     "pitch": 0,
     "frames": [
      {
       "thumbnailUrl": "media/panorama_54164A57_596B_75F4_41B0_84DA64554815_t.jpg",
       "class": "SphericPanoramaFrame",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 2000,
          "class": "ImageResourceLevel",
          "width": 4000,
          "url": "media/panorama_54164A57_596B_75F4_41B0_84DA64554815_hq.jpeg"
         }
        ]
       },
       "overlays": [
        {
         "areas": [
          {
           "mapColor": "#FF0000",
           "displayTooltipInTouchScreens": true,
           "toolTip": "ENTREE",
           "click": "this.startPanoramaWithCamera(this.panorama_55F16605_5968_9D54_41CF_27A8E3F9A778, this.camera_4AE59C78_5A5E_9540_417C_AFDFC0405C6F); this.mainPlayList.set('selectedIndex', 0)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_54160A57_596B_75F4_41A3_D0426908D411",
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 19.02,
           "yaw": -89.85,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 106,
              "class": "ImageResourceLevel",
              "width": 105,
              "url": "media/panorama_54164A57_596B_75F4_41B0_84DA64554815_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": 0.07
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "yaw": -89.85,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 19.02,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 212,
              "class": "ImageResourceLevel",
              "width": 211,
              "url": "media/panorama_54164A57_596B_75F4_41B0_84DA64554815_0_HS_0_0.png"
             }
            ]
           },
           "pitch": 0.07
          }
         ]
        },
        {
         "areas": [
          {
           "mapColor": "#FF0000",
           "displayTooltipInTouchScreens": true,
           "toolTip": "CHAMBRE \u000aPARENTALE",
           "click": "this.startPanoramaWithCamera(this.panorama_55F62A2F_5968_F554_41C5_FB4D1F2EDBCF, this.camera_4AF4DC8C_5A5E_95C0_41C5_1E10AB7E018E); this.mainPlayList.set('selectedIndex', 4)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_5416FA57_596B_75F4_41D5_C7F952390693",
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 16.07,
           "yaw": 173.22,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 89,
              "class": "ImageResourceLevel",
              "width": 89,
              "url": "media/panorama_54164A57_596B_75F4_41B0_84DA64554815_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": 2.32
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "yaw": 173.22,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 16.07,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 178,
              "class": "ImageResourceLevel",
              "width": 178,
              "url": "media/panorama_54164A57_596B_75F4_41B0_84DA64554815_0_HS_1_0.png"
             }
            ]
           },
           "pitch": 2.32
          }
         ]
        }
       ]
      }
     ],
     "hfovMin": 60,
     "hfov": 360,
     "class": "Panorama",
     "label": "Salle a manger 003",
     "partial": false,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_55F16605_5968_9D54_41CF_27A8E3F9A778",
       "yaw": -89.85,
       "distance": 1,
       "backwardYaw": 89.52
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "vfov": 180,
        "thumbnailUrl": "media/panorama_55F62A2F_5968_F554_41C5_FB4D1F2EDBCF_t.jpg",
        "hfovMax": 120,
        "id": "panorama_55F62A2F_5968_F554_41C5_FB4D1F2EDBCF",
        "pitch": 0,
        "frames": [
         {
          "thumbnailUrl": "media/panorama_55F62A2F_5968_F554_41C5_FB4D1F2EDBCF_t.jpg",
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 2000,
             "class": "ImageResourceLevel",
             "width": 4000,
             "url": "media/panorama_55F62A2F_5968_F554_41C5_FB4D1F2EDBCF_hq.jpeg"
            }
           ]
          },
          "overlays": [
           {
            "areas": [
             {
              "mapColor": "#FF0000",
              "displayTooltipInTouchScreens": true,
              "toolTip": "SALLE A MANGER",
              "click": "this.startPanoramaWithCamera(this.panorama_54164A57_596B_75F4_41B0_84DA64554815, this.camera_4A597D15_5A5E_94C0_41D0_9E4C070A8E81); this.mainPlayList.set('selectedIndex', 1)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "id": "overlay_55F61A2F_5968_F554_41CA_C909A45DEA4F",
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 19.01,
              "yaw": -10.46,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 106,
                 "class": "ImageResourceLevel",
                 "width": 105,
                 "url": "media/panorama_55F62A2F_5968_F554_41C5_FB4D1F2EDBCF_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -1.44
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "yaw": -10.46,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 19.01,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 212,
                 "class": "ImageResourceLevel",
                 "width": 211,
                 "url": "media/panorama_55F62A2F_5968_F554_41C5_FB4D1F2EDBCF_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -1.44
             }
            ]
           },
           {
            "areas": [
             {
              "mapColor": "#FF0000",
              "displayTooltipInTouchScreens": true,
              "toolTip": "PENDERIE",
              "click": "this.startPanoramaWithCamera(this.panorama_5583DE78_5969_6DBC_41D2_CFAB104DF293, this.camera_4A67DD34_5A5E_94C0_4175_8C6775872F03); this.mainPlayList.set('selectedIndex', 5)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "id": "overlay_55F60A2F_5968_F554_41C7_49EAD8FFE2DD",
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 11.38,
              "yaw": -14.48,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 36,
                 "class": "ImageResourceLevel",
                 "width": 69,
                 "url": "media/panorama_55F62A2F_5968_F554_41C5_FB4D1F2EDBCF_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -24.31
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "yaw": -14.48,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 11.38,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 72,
                 "class": "ImageResourceLevel",
                 "width": 138,
                 "url": "media/panorama_55F62A2F_5968_F554_41C5_FB4D1F2EDBCF_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -24.31
             }
            ]
           }
          ]
         }
        ],
        "hfovMin": 60,
        "hfov": 360,
        "class": "Panorama",
        "label": "CH_P",
        "partial": false,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_54164A57_596B_75F4_41B0_84DA64554815",
          "yaw": -10.46,
          "distance": 1,
          "backwardYaw": 173.22
         },
         {
          "class": "AdjacentPanorama",
          "panorama": {
           "vfov": 180,
           "thumbnailUrl": "media/panorama_5583DE78_5969_6DBC_41D2_CFAB104DF293_t.jpg",
           "hfovMax": 120,
           "id": "panorama_5583DE78_5969_6DBC_41D2_CFAB104DF293",
           "pitch": 0,
           "frames": [
            {
             "thumbnailUrl": "media/panorama_5583DE78_5969_6DBC_41D2_CFAB104DF293_t.jpg",
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 2000,
                "class": "ImageResourceLevel",
                "width": 4000,
                "url": "media/panorama_5583DE78_5969_6DBC_41D2_CFAB104DF293_hq.jpeg"
               }
              ]
             },
             "overlays": [
              {
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "displayTooltipInTouchScreens": true,
                 "toolTip": "SALLE DE BAIN",
                 "click": "this.startPanoramaWithCamera(this.panorama_5438FE92_5969_AD4F_41D0_C7965090566E, this.camera_4A9EBCC7_5A5E_9540_41D1_5CAB57BA688C); this.mainPlayList.set('selectedIndex', 6)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "id": "overlay_55839E78_5969_6DBC_41A0_BD10639D23D2",
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 18.95,
                 "yaw": 129.72,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 106,
                    "class": "ImageResourceLevel",
                    "width": 105,
                    "url": "media/panorama_5583DE78_5969_6DBC_41D2_CFAB104DF293_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": 4.84
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "yaw": 129.72,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 18.95,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 212,
                    "class": "ImageResourceLevel",
                    "width": 211,
                    "url": "media/panorama_5583DE78_5969_6DBC_41D2_CFAB104DF293_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": 4.84
                }
               ]
              },
              {
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "displayTooltipInTouchScreens": true,
                 "toolTip": "CHAMBRE",
                 "click": "this.startPanoramaWithCamera(this.panorama_55F62A2F_5968_F554_41C5_FB4D1F2EDBCF, this.camera_4A901CB3_5A5E_95C0_41BA_A877CB59B4CA); this.mainPlayList.set('selectedIndex', 4)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "id": "overlay_55807E78_5969_6DBC_4189_29E08E070B66",
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 11.8,
                 "yaw": 174.1,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 65,
                    "class": "ImageResourceLevel",
                    "width": 65,
                    "url": "media/panorama_5583DE78_5969_6DBC_41D2_CFAB104DF293_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -2.34
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "yaw": 174.1,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 11.8,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 131,
                    "class": "ImageResourceLevel",
                    "width": 131,
                    "url": "media/panorama_5583DE78_5969_6DBC_41D2_CFAB104DF293_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -2.34
                }
               ]
              },
              {
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "displayTooltipInTouchScreens": true,
                 "toolTip": "SALLE A MANGER",
                 "click": "this.mainPlayList.set('selectedIndex', 1)",
                 "class": "HotspotPanoramaOverlayArea"
                }
               ],
               "id": "overlay_55805E79_5969_6DBC_41C5_AADE3DEE42A6",
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "class": "HotspotPanoramaOverlay",
               "rollOverDisplay": false,
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 17.2,
                 "yaw": -1.56,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 96,
                    "class": "ImageResourceLevel",
                    "width": 95,
                    "url": "media/panorama_5583DE78_5969_6DBC_41D2_CFAB104DF293_0_HS_2_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -2.8
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "yaw": -1.56,
                 "class": "HotspotPanoramaOverlayImage",
                 "hfov": 17.2,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 192,
                    "class": "ImageResourceLevel",
                    "width": 191,
                    "url": "media/panorama_5583DE78_5969_6DBC_41D2_CFAB104DF293_0_HS_2_0.png"
                   }
                  ]
                 },
                 "pitch": -2.8
                }
               ]
              }
             ]
            }
           ],
           "hfovMin": 104,
           "hfov": 360,
           "class": "Panorama",
           "label": "CH_PD",
           "partial": false,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "panorama": "this.panorama_55F62A2F_5968_F554_41C5_FB4D1F2EDBCF",
             "yaw": 174.1,
             "distance": 1,
             "backwardYaw": -14.48
            },
            {
             "class": "AdjacentPanorama",
             "panorama": {
              "vfov": 180,
              "thumbnailUrl": "media/panorama_5438FE92_5969_AD4F_41D0_C7965090566E_t.jpg",
              "hfovMax": 120,
              "id": "panorama_5438FE92_5969_AD4F_41D0_C7965090566E",
              "pitch": 0,
              "frames": [
               {
                "thumbnailUrl": "media/panorama_5438FE92_5969_AD4F_41D0_C7965090566E_t.jpg",
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 2000,
                   "class": "ImageResourceLevel",
                   "width": 4000,
                   "url": "media/panorama_5438FE92_5969_AD4F_41D0_C7965090566E_hq.jpeg"
                  }
                 ]
                },
                "overlays": [
                 {
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "displayTooltipInTouchScreens": true,
                    "toolTip": "CHAMBRE \u000aMASTER",
                    "click": "this.startPanoramaWithCamera(this.panorama_5583DE78_5969_6DBC_41D2_CFAB104DF293, this.camera_4A76AD58_5A5E_9740_41A9_BD678D66EC32); this.mainPlayList.set('selectedIndex', 5)",
                    "class": "HotspotPanoramaOverlayArea"
                   }
                  ],
                  "id": "overlay_54383E92_5969_AD4F_41D4_CDD683F30A83",
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "class": "HotspotPanoramaOverlay",
                  "rollOverDisplay": false,
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 14.98,
                    "yaw": -83.32,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 89,
                       "class": "ImageResourceLevel",
                       "width": 83,
                       "url": "media/panorama_5438FE92_5969_AD4F_41D0_C7965090566E_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": 3.34
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "yaw": -83.32,
                    "class": "HotspotPanoramaOverlayImage",
                    "hfov": 14.98,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 178,
                       "class": "ImageResourceLevel",
                       "width": 166,
                       "url": "media/panorama_5438FE92_5969_AD4F_41D0_C7965090566E_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": 3.34
                   }
                  ]
                 }
                ]
               }
              ],
              "hfovMin": 60,
              "hfov": 360,
              "class": "Panorama",
              "label": "SDB_P",
              "partial": false,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "panorama": "this.panorama_5583DE78_5969_6DBC_41D2_CFAB104DF293",
                "yaw": -83.32,
                "distance": 1,
                "backwardYaw": 129.72
               }
              ]
             },
             "yaw": 129.72,
             "distance": 1,
             "backwardYaw": -83.32
            }
           ]
          },
          "yaw": -14.48,
          "distance": 1,
          "backwardYaw": 174.1
         }
        ]
       },
       "yaw": 173.22,
       "distance": 1,
       "backwardYaw": -10.46
      }
     ]
    },
    "yaw": 89.52,
    "distance": 1,
    "backwardYaw": -89.85
   }
  ]
 },
 {
  "preloadEnabled": false,
  "id": "MainViewerPanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "displayPlaybackBar": true,
  "class": "PanoramaPlayer",
  "mouseControlMode": "drag_acceleration",
  "viewerArea": "this.MainViewer",
  "touchControlMode": "drag_rotation"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_55F16605_5968_9D54_41CF_27A8E3F9A778_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_54164A57_596B_75F4_41B0_84DA64554815",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -85.35,
   "pitch": -7.42
  },
  "id": "panorama_54164A57_596B_75F4_41B0_84DA64554815_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_55923054_596B_F5CB_4188_04441B29B772",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 139.54,
   "pitch": 4.47
  },
  "id": "panorama_55923054_596B_F5CB_4188_04441B29B772_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_542012C6_596B_7AD4_41D2_397AF6E32719",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 89.37,
   "pitch": 0.65
  },
  "id": "panorama_542012C6_596B_7AD4_41D2_397AF6E32719_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_55F62A2F_5968_F554_41C5_FB4D1F2EDBCF",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 87.1,
   "pitch": 4.11
  },
  "id": "panorama_55F62A2F_5968_F554_41C5_FB4D1F2EDBCF_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_5583DE78_5969_6DBC_41D2_CFAB104DF293",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 92.39,
   "pitch": -0.7
  },
  "id": "panorama_5583DE78_5969_6DBC_41D2_CFAB104DF293_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_5438FE92_5969_AD4F_41D0_C7965090566E",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -176.89,
   "pitch": -3.85
  },
  "id": "panorama_5438FE92_5969_AD4F_41D0_C7965090566E_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_577A6E3C_5969_6DB4_41B0_46BAD85F8406",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_577A6E3C_5969_6DB4_41B0_46BAD85F8406_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_543A0C8F_5968_ED54_41D0_02C284710200",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_543A0C8F_5968_ED54_41D0_02C284710200_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_5427A89F_596F_9574_41C5_B2DFDFA87BDC",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 2.96,
   "pitch": 1.96
  },
  "id": "panorama_5427A89F_596F_9574_41C5_B2DFDFA87BDC_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_54292EB4_596F_EAB4_41D2_0B888B056A84",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_54292EB4_596F_EAB4_41D2_0B888B056A84_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "vfov": 180,
  "hfovMax": 120,
  "id": "panorama_57E022CE_596F_7AD5_41B5_F992C11E41CA",
  "pitch": 0,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_57E022CE_596F_7AD5_41B5_F992C11E41CA_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2000,
       "class": "ImageResourceLevel",
       "width": 4000,
       "url": "media/panorama_57E022CE_596F_7AD5_41B5_F992C11E41CA_hq.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "areas": [
       {
        "mapColor": "#FF0000",
        "displayTooltipInTouchScreens": true,
        "toolTip": "CHAMBRE",
        "click": "this.mainPlayList.set('selectedIndex', 10)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "id": "overlay_57E7E2CF_596F_7AD4_4198_1EFA2498E545",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 15.75,
        "yaw": 164.55,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 93,
           "class": "ImageResourceLevel",
           "width": 87,
           "url": "media/panorama_57E022CE_596F_7AD5_41B5_F992C11E41CA_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": 5.69
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": 164.55,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 15.75,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 187,
           "class": "ImageResourceLevel",
           "width": 175,
           "url": "media/panorama_57E022CE_596F_7AD5_41B5_F992C11E41CA_0_HS_0_0.png"
          }
         ]
        },
        "pitch": 5.69
       }
      ]
     }
    ]
   }
  ],
  "hfovMin": 60,
  "hfov": 360,
  "class": "Panorama",
  "label": "SDB",
  "partial": false,
  "thumbnailUrl": "media/panorama_57E022CE_596F_7AD5_41B5_F992C11E41CA_t.jpg"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -88.51,
   "pitch": -0.31
  },
  "id": "panorama_57E022CE_596F_7AD5_41B5_F992C11E41CA_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_545C52F6_5968_9AB4_41C5_FC5D0856755D",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -157.05,
   "pitch": -1.06
  },
  "id": "panorama_545C52F6_5968_9AB4_41C5_FC5D0856755D_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "vfov": 180,
  "hfovMax": 120,
  "id": "panorama_5429AEFA_5969_6ABC_41CE_CF2FE57EBF03",
  "pitch": 0,
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2000,
       "class": "ImageResourceLevel",
       "width": 4000,
       "url": "media/panorama_5429AEFA_5969_6ABC_41CE_CF2FE57EBF03_hq.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_5429AEFA_5969_6ABC_41CE_CF2FE57EBF03_t.jpg"
   }
  ],
  "hfovMin": 60,
  "hfov": 360,
  "class": "Panorama",
  "label": "SDB",
  "partial": false,
  "thumbnailUrl": "media/panorama_5429AEFA_5969_6ABC_41CE_CF2FE57EBF03_t.jpg"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_5429AEFA_5969_6ABC_41CE_CF2FE57EBF03_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "vfov": 180,
  "thumbnailUrl": "media/panorama_54021CE9_5969_AEDC_41B1_94CCF9283B3E_t.jpg",
  "hfovMax": 120,
  "id": "panorama_54021CE9_5969_AEDC_41B1_94CCF9283B3E",
  "pitch": 0,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_54021CE9_5969_AEDC_41B1_94CCF9283B3E_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2000,
       "class": "ImageResourceLevel",
       "width": 4000,
       "url": "media/panorama_54021CE9_5969_AEDC_41B1_94CCF9283B3E_hq.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000",
        "click": "this.startPanoramaWithCamera(this.panorama_54FE19DD_5969_B6F7_4165_821D0DC2D25D, this.camera_4BEA3E5E_5A5E_9540_41D0_3DF41A44A0E3); this.mainPlayList.set('selectedIndex', 15)"
       }
      ],
      "id": "overlay_54020CE9_5969_AEDC_41D2_A9569C6EDF20",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "class": "HotspotPanoramaOverlay",
      "rollOverDisplay": false,
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 13.76,
        "yaw": 131.35,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 41,
           "class": "ImageResourceLevel",
           "width": 84,
           "url": "media/panorama_54021CE9_5969_AEDC_41B1_94CCF9283B3E_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -25.56
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "yaw": 131.35,
        "class": "HotspotPanoramaOverlayImage",
        "hfov": 13.76,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 83,
           "class": "ImageResourceLevel",
           "width": 169,
           "url": "media/panorama_54021CE9_5969_AEDC_41B1_94CCF9283B3E_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -25.56
       }
      ]
     }
    ]
   }
  ],
  "hfovMin": 60,
  "hfov": 360,
  "class": "Panorama",
  "label": "CH_INV",
  "partial": false,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "vfov": 180,
     "thumbnailUrl": "media/panorama_54FE19DD_5969_B6F7_4165_821D0DC2D25D_t.jpg",
     "hfovMax": 120,
     "id": "panorama_54FE19DD_5969_B6F7_4165_821D0DC2D25D",
     "pitch": 0,
     "frames": [
      {
       "thumbnailUrl": "media/panorama_54FE19DD_5969_B6F7_4165_821D0DC2D25D_t.jpg",
       "class": "SphericPanoramaFrame",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 2000,
          "class": "ImageResourceLevel",
          "width": 4000,
          "url": "media/panorama_54FE19DD_5969_B6F7_4165_821D0DC2D25D_hq.jpeg"
         }
        ]
       },
       "overlays": [
        {
         "areas": [
          {
           "mapColor": "#FF0000",
           "displayTooltipInTouchScreens": true,
           "toolTip": "COULOIR",
           "click": "this.mainPlayList.set('selectedIndex', 9)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_54FE09DE_5969_B6F4_41D3_364197CA8252",
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 19.02,
           "yaw": 3.36,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 106,
              "class": "ImageResourceLevel",
              "width": 105,
              "url": "media/panorama_54FE19DD_5969_B6F7_4165_821D0DC2D25D_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -0.18
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "yaw": 3.36,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 19.02,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 212,
              "class": "ImageResourceLevel",
              "width": 211,
              "url": "media/panorama_54FE19DD_5969_B6F7_4165_821D0DC2D25D_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -0.18
          }
         ]
        },
        {
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000",
           "click": "this.startPanoramaWithCamera(this.panorama_54021CE9_5969_AEDC_41B1_94CCF9283B3E, this.camera_4B8A8E99_5A5E_95C0_41D4_CC6CAEC2576F); this.mainPlayList.set('selectedIndex', 14)"
          }
         ],
         "id": "overlay_54FE39DE_5969_B6F4_41C3_E6485D029BD6",
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 12.16,
           "yaw": -108.31,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 41,
              "class": "ImageResourceLevel",
              "width": 84,
              "url": "media/panorama_54FE19DD_5969_B6F7_4165_821D0DC2D25D_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -37.12
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "yaw": -108.31,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 12.16,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 83,
              "class": "ImageResourceLevel",
              "width": 169,
              "url": "media/panorama_54FE19DD_5969_B6F7_4165_821D0DC2D25D_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -37.12
          }
         ]
        },
        {
         "areas": [
          {
           "mapColor": "#FF0000",
           "displayTooltipInTouchScreens": true,
           "toolTip": "SALLE DE BAIN",
           "click": "this.startPanoramaWithCamera(this.panorama_542AF598_5968_BF7C_4189_D246F812F614, this.camera_4B987EAA_5A5E_95C0_41B8_9CBE9C0EA90F); this.mainPlayList.set('selectedIndex', 16)",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "id": "overlay_54FFD9DE_5969_B6F4_41B0_2CE9EF2686D4",
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "class": "HotspotPanoramaOverlay",
         "rollOverDisplay": false,
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 20.97,
           "yaw": -164.96,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 122,
              "class": "ImageResourceLevel",
              "width": 116,
              "url": "media/panorama_54FE19DD_5969_B6F7_4165_821D0DC2D25D_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "pitch": 4.34
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "yaw": -164.96,
           "class": "HotspotPanoramaOverlayImage",
           "hfov": 20.97,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 245,
              "class": "ImageResourceLevel",
              "width": 233,
              "url": "media/panorama_54FE19DD_5969_B6F7_4165_821D0DC2D25D_0_HS_2_0.png"
             }
            ]
           },
           "pitch": 4.34
          }
         ]
        }
       ]
      }
     ],
     "hfovMin": 60,
     "hfov": 360,
     "class": "Panorama",
     "label": "CH_INV-D",
     "partial": false,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_54021CE9_5969_AEDC_41B1_94CCF9283B3E",
       "yaw": -108.31,
       "distance": 1,
       "backwardYaw": 131.35
      },
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "vfov": 180,
        "thumbnailUrl": "media/panorama_542AF598_5968_BF7C_4189_D246F812F614_t.jpg",
        "hfovMax": 120,
        "id": "panorama_542AF598_5968_BF7C_4189_D246F812F614",
        "pitch": 0,
        "frames": [
         {
          "thumbnailUrl": "media/panorama_542AF598_5968_BF7C_4189_D246F812F614_t.jpg",
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 2000,
             "class": "ImageResourceLevel",
             "width": 4000,
             "url": "media/panorama_542AF598_5968_BF7C_4189_D246F812F614_hq.jpeg"
            }
           ]
          },
          "overlays": [
           {
            "areas": [
             {
              "mapColor": "#FF0000",
              "displayTooltipInTouchScreens": true,
              "toolTip": "CHAMBRE",
              "click": "this.startPanoramaWithCamera(this.panorama_54FE19DD_5969_B6F7_4165_821D0DC2D25D, this.camera_4A04CD76_5A5E_9740_41C3_8106734E6B61); this.mainPlayList.set('selectedIndex', 15)",
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "id": "overlay_542AE598_5968_BF7C_41BA_E3F5D0E99EE0",
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "class": "HotspotPanoramaOverlay",
            "rollOverDisplay": false,
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 18.89,
              "yaw": -6.94,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 106,
                 "class": "ImageResourceLevel",
                 "width": 105,
                 "url": "media/panorama_542AF598_5968_BF7C_4189_D246F812F614_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": 6.6
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "yaw": -6.94,
              "class": "HotspotPanoramaOverlayImage",
              "hfov": 18.89,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 212,
                 "class": "ImageResourceLevel",
                 "width": 211,
                 "url": "media/panorama_542AF598_5968_BF7C_4189_D246F812F614_0_HS_0_0.png"
                }
               ]
              },
              "pitch": 6.6
             }
            ]
           }
          ]
         }
        ],
        "hfovMin": 60,
        "hfov": 360,
        "class": "Panorama",
        "label": "SDB_CH_INV",
        "partial": false,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_54FE19DD_5969_B6F7_4165_821D0DC2D25D",
          "yaw": -6.94,
          "distance": 1,
          "backwardYaw": -164.96
         }
        ]
       },
       "yaw": -164.96,
       "distance": 1,
       "backwardYaw": -6.94
      }
     ]
    },
    "yaw": 131.35,
    "distance": 1,
    "backwardYaw": -108.31
   }
  ]
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_54021CE9_5969_AEDC_41B1_94CCF9283B3E_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_54FE19DD_5969_B6F7_4165_821D0DC2D25D",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 1.23,
   "pitch": -2.92
  },
  "id": "panorama_54FE19DD_5969_B6F7_4165_821D0DC2D25D_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_542AF598_5968_BF7C_4189_D246F812F614",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 86.03,
   "pitch": -2.52
  },
  "id": "panorama_542AF598_5968_BF7C_4189_D246F812F614_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_54DFD5C3_5968_9ECC_41CF_BED9CBB9364C",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 179.81,
   "pitch": -1.21
  },
  "id": "panorama_54DFD5C3_5968_9ECC_41CF_BED9CBB9364C_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 "this.panorama_57CFF9CD_596B_96D5_4195_B7E7A126290E",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -90.38,
   "pitch": -0.51
  },
  "id": "panorama_57CFF9CD_596B_96D5_4195_B7E7A126290E_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "vfov": 180,
  "hfovMax": 120,
  "id": "panorama_574BDFC3_5A23_B340_41B4_7A1F20F5AA6E",
  "pitch": 0,
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2000,
       "class": "ImageResourceLevel",
       "width": 4000,
       "url": "media/panorama_574BDFC3_5A23_B340_41B4_7A1F20F5AA6E_hq.jpeg"
      }
     ]
    },
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_574BDFC3_5A23_B340_41B4_7A1F20F5AA6E_t.jpg"
   }
  ],
  "hfovMin": 60,
  "hfov": 360,
  "class": "Panorama",
  "label": "8",
  "partial": false,
  "thumbnailUrl": "media/panorama_574BDFC3_5A23_B340_41B4_7A1F20F5AA6E_t.jpg"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "id": "panorama_574BDFC3_5A23_B340_41B4_7A1F20F5AA6E_camera",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "camera": "this.panorama_55F16605_5968_9D54_41CF_27A8E3F9A778_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_55F16605_5968_9D54_41CF_27A8E3F9A778",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "camera": "this.panorama_54164A57_596B_75F4_41B0_84DA64554815_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_54164A57_596B_75F4_41B0_84DA64554815",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "camera": "this.panorama_55923054_596B_F5CB_4188_04441B29B772_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_55923054_596B_F5CB_4188_04441B29B772",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "camera": "this.panorama_542012C6_596B_7AD4_41D2_397AF6E32719_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_542012C6_596B_7AD4_41D2_397AF6E32719",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "camera": "this.panorama_55F62A2F_5968_F554_41C5_FB4D1F2EDBCF_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_55F62A2F_5968_F554_41C5_FB4D1F2EDBCF",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "camera": "this.panorama_5583DE78_5969_6DBC_41D2_CFAB104DF293_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5583DE78_5969_6DBC_41D2_CFAB104DF293",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "camera": "this.panorama_5438FE92_5969_AD4F_41D0_C7965090566E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5438FE92_5969_AD4F_41D0_C7965090566E",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "camera": "this.panorama_577A6E3C_5969_6DB4_41B0_46BAD85F8406_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_577A6E3C_5969_6DB4_41B0_46BAD85F8406",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "camera": "this.panorama_543A0C8F_5968_ED54_41D0_02C284710200_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_543A0C8F_5968_ED54_41D0_02C284710200",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "camera": "this.panorama_5427A89F_596F_9574_41C5_B2DFDFA87BDC_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5427A89F_596F_9574_41C5_B2DFDFA87BDC",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "camera": "this.panorama_54292EB4_596F_EAB4_41D2_0B888B056A84_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_54292EB4_596F_EAB4_41D2_0B888B056A84",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "camera": "this.panorama_57E022CE_596F_7AD5_41B5_F992C11E41CA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_57E022CE_596F_7AD5_41B5_F992C11E41CA",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)"
   },
   {
    "camera": "this.panorama_545C52F6_5968_9AB4_41C5_FC5D0856755D_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_545C52F6_5968_9AB4_41C5_FC5D0856755D",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)"
   },
   {
    "camera": "this.panorama_5429AEFA_5969_6ABC_41CE_CF2FE57EBF03_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_5429AEFA_5969_6ABC_41CE_CF2FE57EBF03",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)"
   },
   {
    "camera": "this.panorama_54021CE9_5969_AEDC_41B1_94CCF9283B3E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_54021CE9_5969_AEDC_41B1_94CCF9283B3E",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)"
   },
   {
    "camera": "this.panorama_54FE19DD_5969_B6F7_4165_821D0DC2D25D_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_54FE19DD_5969_B6F7_4165_821D0DC2D25D",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)"
   },
   {
    "camera": "this.panorama_542AF598_5968_BF7C_4189_D246F812F614_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_542AF598_5968_BF7C_4189_D246F812F614",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)"
   },
   {
    "camera": "this.panorama_54DFD5C3_5968_9ECC_41CF_BED9CBB9364C_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_54DFD5C3_5968_9ECC_41CF_BED9CBB9364C",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)"
   },
   {
    "camera": "this.panorama_57CFF9CD_596B_96D5_4195_B7E7A126290E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_57CFF9CD_596B_96D5_4195_B7E7A126290E",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)"
   },
   {
    "camera": "this.panorama_574BDFC3_5A23_B340_41B4_7A1F20F5AA6E_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_574BDFC3_5A23_B340_41B4_7A1F20F5AA6E",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 0)",
    "end": "this.trigger('tourEnded')"
   }
  ]
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -0.25,
   "pitch": 0
  },
  "id": "camera_552ABC15_5A5E_94C3_419A_33DC25131705",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 83.87,
   "pitch": 0
  },
  "id": "camera_55344C29_5A5E_94C0_41B0_B5D42A1B5463",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -97.26,
   "pitch": 0
  },
  "id": "camera_553EAC3D_5A5E_94C0_41C4_82ADA1C2F3E5",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -13.69,
   "pitch": 0
  },
  "id": "camera_4AC95C51_5A5E_9540_41A2_8B9607DAF698",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 173.18,
   "pitch": 0
  },
  "id": "camera_4AD6FC64_5A5E_9540_41A3_D745E9BB19C5",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -90.48,
   "pitch": 0
  },
  "id": "camera_4AE59C78_5A5E_9540_417C_AFDFC0405C6F",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 169.54,
   "pitch": 0
  },
  "id": "camera_4AF4DC8C_5A5E_95C0_41C5_1E10AB7E018E",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -169.11,
   "pitch": 0
  },
  "id": "camera_4A811C9F_5A5E_95C0_41C0_13A0AB9C048A",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 165.52,
   "pitch": 0
  },
  "id": "camera_4A901CB3_5A5E_95C0_41BA_A877CB59B4CA",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 96.68,
   "pitch": 0
  },
  "id": "camera_4A9EBCC7_5A5E_9540_41D1_5CAB57BA688C",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -172.02,
   "pitch": 0
  },
  "id": "camera_4AADBCDA_5A5E_9540_41C3_4C0A9CE3A072",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -14.07,
   "pitch": 0
  },
  "id": "camera_4ABB4CEE_5A5E_9540_41B2_AE5B2B3A8498",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -130.98,
   "pitch": 0
  },
  "id": "camera_4A4AAD02_5A5E_94C0_41BC_10C3FB8E24EA",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -6.78,
   "pitch": 0
  },
  "id": "camera_4A597D15_5A5E_94C0_41D0_9E4C070A8E81",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -5.9,
   "pitch": 0
  },
  "id": "camera_4A67DD34_5A5E_94C0_4175_8C6775872F03",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -50.28,
   "pitch": 0
  },
  "id": "camera_4A76AD58_5A5E_9740_41A9_BD678D66EC32",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 15.04,
   "pitch": 0
  },
  "id": "camera_4A04CD76_5A5E_9740_41C3_8106734E6B61",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 62.27,
   "pitch": 0
  },
  "id": "camera_4A13AD95_5A5E_97C0_41C8_69AF5A394D0E",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 171.4,
   "pitch": 0
  },
  "id": "camera_4A218DB8_5A5E_97C0_41CE_D762E2575938",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 90.15,
   "pitch": 0
  },
  "id": "camera_4A304DD7_5A5E_9740_41D4_3175949894F4",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 179.59,
   "pitch": 0
  },
  "id": "camera_4A3F4DFB_5A5E_9740_41C1_4700A2188E8F",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -1.13,
   "pitch": 0
  },
  "id": "camera_4BCD7E1B_5A5E_94C0_41C4_1D162C859E29",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -78.67,
   "pitch": 0
  },
  "id": "camera_4BDDCE3A_5A5E_94C0_41C8_2D117A2968F6",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 71.69,
   "pitch": 0
  },
  "id": "camera_4BEA3E5E_5A5E_9540_41D0_3DF41A44A0E3",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 98.19,
   "pitch": 0
  },
  "id": "camera_4BFAEE78_5A5E_9540_41CB_5CCECF51B6A4",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -48.65,
   "pitch": 0
  },
  "id": "camera_4B8A8E99_5A5E_95C0_41D4_CC6CAEC2576F",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 173.06,
   "pitch": 0
  },
  "id": "camera_4B987EAA_5A5E_95C0_41B8_9CBE9C0EA90F",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 36.77,
   "pitch": 0
  },
  "id": "camera_4BA8EEBA_5A5E_95C0_41C2_EA65EC7704BA",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -108.56,
   "pitch": 0
  },
  "id": "camera_4BB6DECB_5A5E_9540_41D1_D36DB839A1F5",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 17.93,
   "pitch": 0
  },
  "id": "camera_4B456EDB_5A5E_9540_41CA_CBFAEBAB3B40",
  "initialSequence": {
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera"
 }
], "children": [
 {
  "toolTipTextShadowOpacity": 0,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "borderRadius": 0,
  "borderSize": 0,
  "playbackBarBorderSize": 0,
  "paddingRight": 0,
  "paddingLeft": 0,
  "toolTipBorderColor": "#767676",
  "progressBorderRadius": 0,
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadow": true,
  "toolTipPaddingLeft": 6,
  "progressOpacity": 1,
  "playbackBarBorderRadius": 0,
  "class": "ViewerArea",
  "playbackBarBackgroundOpacity": 1,
  "shadow": false,
  "toolTipShadowColor": "#333333",
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipFontSize": 12,
  "progressBorderSize": 0,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarBottom": 5,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressLeft": 0,
  "progressBackgroundColorDirection": "vertical",
  "progressBorderColor": "#000000",
  "playbackBarHeadBorderSize": 0,
  "progressBackgroundOpacity": 1,
  "minHeight": 50,
  "playbackBarOpacity": 1,
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarHeadBorderRadius": 0,
  "toolTipTextShadowColor": "#000000",
  "paddingBottom": 0,
  "playbackBarHeight": 10,
  "toolTipShadowBlurRadius": 3,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipFontStyle": "normal",
  "progressBarBackgroundColorDirection": "vertical",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeadBorderColor": "#000000",
  "toolTipPaddingRight": 6,
  "minWidth": 100,
  "toolTipBorderSize": 1,
  "width": "100%",
  "toolTipPaddingBottom": 4,
  "progressBarOpacity": 1,
  "toolTipFontFamily": "Arial",
  "paddingTop": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "toolTipFontColor": "#606060",
  "height": "100%",
  "playbackBarProgressBorderSize": 0,
  "playbackBarLeft": 0,
  "playbackBarHeadHeight": 15,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarHeadWidth": 6,
  "playbackBarBackgroundColorDirection": "vertical",
  "progressBarBorderRadius": 0,
  "progressBottom": 0,
  "toolTipShadowHorizontalLength": 0,
  "playbackBarRight": 0,
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowColor": "#000000",
  "progressHeight": 10,
  "playbackBarHeadOpacity": 1,
  "toolTipFontWeight": "normal",
  "playbackBarHeadShadowBlurRadius": 3,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "transitionMode": "blending",
  "toolTipDisplayTime": 600,
  "id": "MainViewer",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipOpacity": 1,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "transitionDuration": 500,
  "toolTipBorderRadius": 3,
  "toolTipShadowSpread": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipPaddingTop": 4,
  "progressBarBorderSize": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "progressRight": 0,
  "toolTipBackgroundColor": "#F6F6F6"
 }
], 
 "verticalAlign": "top",
 "borderRadius": 0,
 "minWidth": 20,
 "paddingRight": 0,
 "paddingLeft": 0,
 "width": "100%",
 "paddingTop": 0,
 "gap": 10,
 "class": "Player",
 "scrollBarWidth": 10,
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.76,
 "height": "100%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "shadow": false,
 "borderSize": 0,
 "scrollBarMargin": 2,
 "scripts": {
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "existsKey": function(key){  return key in window; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "unregisterKey": function(key){  delete window[key]; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "registerKey": function(key, value){  window[key] = value; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getKey": function(key){  return window[key]; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; }
 },
 "mouseWheelEnabled": true,
 "layout": "absolute",
 "id": "rootPlayer",
 "data": {
  "name": "Player437"
 },
 "minHeight": 20,
 "paddingBottom": 0,
 "backgroundPreloadEnabled": true,
 "scrollBarOpacity": 0.5,
 "start": "this.mainPlayList.set('selectedIndex', 0)",
 "creationPolicy": "delayed",
 "scrollBarVisible": "rollOver",
 "contentOpaque": false,
 "overflow": "visible"
})