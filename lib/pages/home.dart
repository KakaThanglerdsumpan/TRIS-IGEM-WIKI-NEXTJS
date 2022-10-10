import 'dart:ui';

import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';
import 'package:igem/modules/bottombar.dart';

import '../modules/navigation/appbars.dart';
import '../modules/navigation/sidemenu.dart';

class HomePage extends StatelessWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    double screenWidth = MediaQuery.of(context).size.width;
    double unitWidthValue = MediaQuery.of(context).size.width * 0.01;
    double headerMultiplier = 12;
    return Scaffold(
      appBar: const MyAppBar(),
      drawer: const SideMenu(),
      backgroundColor: Colors.transparent,
      body: ListView(children: [
        Stack(
          children: MediaQuery.of(context).size.width < 1040
              ? [
                  Container(
                    width: MediaQuery.of(context).size.width,
                    height: screenWidth <= 600
                        ? 125 + 600 + (screenWidth - 670)
                        : MediaQuery.of(context).size.height - 80,
                    decoration: const BoxDecoration(
                        gradient: LinearGradient(
                            begin: Alignment.bottomRight,
                            end: Alignment.topLeft,
                            colors: [
                          Colors.white,
                          Color.fromARGB(255, 63, 81, 181)
                        ])),
                  ),
                  Padding(
                    padding: screenWidth < 600
                        ? const EdgeInsets.symmetric(vertical: 30)
                        : const EdgeInsets.symmetric(vertical: 50),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Column(children: [
                          Text(
                            'THAILAND_RIS',
                            style: TextStyle(
                                fontSize: screenWidth < 625
                                    ? unitWidthValue * headerMultiplier
                                    : 80,
                                fontFamily: 'Rockabye',
                                color: Colors.white),
                          ),
                          const SizedBox(
                            height: 10,
                          ),
                          const Text(
                            'Simple Description',
                            style: TextStyle(
                                fontSize: 25,
                                fontFamily: 'Helvetica',
                                color: Colors.white),
                          ),
                          const SizedBox(
                            height: 25,
                          ),
                          Container(
                            width: screenWidth < 670
                                ? 600 + (screenWidth - 670)
                                : 600,
                            height: screenWidth < 670
                                ? 600 + (screenWidth - 670)
                                : 600,
                            decoration: BoxDecoration(
                              boxShadow: [
                                BoxShadow(
                                  spreadRadius: 5,
                                  color: Colors.white.withOpacity(0.3),
                                )
                              ],
                              shape: BoxShape.circle,
                              gradient: const LinearGradient(
                                begin: Alignment.topLeft,
                                end: Alignment.bottomRight,
                                colors: [
                                  Colors.white,
                                  Colors.indigo,
                                ],
                              ),
                            ),
                            child: Image.network(
                                'https://static.igem.wiki/teams/4314/wiki/igemlogopurple.png'),
                          ),
                        ]),
                      ],
                    ),
                  ),
                ]
              : [
                  Container(
                    width: MediaQuery.of(context).size.width,
                    height: MediaQuery.of(context).size.height - 80,
                    decoration: const BoxDecoration(
                        gradient: LinearGradient(
                            begin: Alignment.bottomRight,
                            end: Alignment.topLeft,
                            colors: [Colors.white, Colors.indigo])),
                  ),
                  Padding(
                    padding: screenWidth < 760
                        ? EdgeInsets.symmetric(
                            horizontal: (100 + screenWidth - 760), vertical: 50)
                        : const EdgeInsets.symmetric(
                            horizontal: 0, vertical: 50),
                    child: Align(
                      alignment: Alignment.center,
                      child: Row(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Column(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              SizedBox(
                                height: MediaQuery.of(context).size.height / 2 -
                                    100,
                              ),
                              ClipRect(
                                child: Align(
                                  alignment: Alignment.bottomRight,
                                  widthFactor: 0.8,
                                  child: Container(
                                    height: 200 + 10,
                                    width: 200 + 10,
                                    decoration: BoxDecoration(
                                      gradient: LinearGradient(colors: [
                                        const Color.fromARGB(255, 121, 131, 189)
                                            .withOpacity(0.3),
                                        Colors.white.withOpacity(0.3),
                                      ]),
                                      shape: BoxShape.circle,
                                    ),
                                    alignment: Alignment.center,
                                    child: Image.network(
                                        width: 200,
                                        height: 200,
                                        'https://static.igem.wiki/teams/4314/wiki/igemlogopurple.png'),
                                  ),
                                ),
                              )
                            ],
                          ),
                          Column(children: [
                            const Text(
                              'THAILAND_RIS',
                              style: TextStyle(
                                  fontSize: 80,
                                  fontFamily: 'Rockabye',
                                  color: Colors.white),
                            ),
                            const SizedBox(
                              height: 10,
                            ),
                            const Text(
                              'Simple Description',
                              style: TextStyle(
                                  fontSize: 25,
                                  fontFamily: 'Helvetica',
                                  color: Colors.white),
                            ),
                            const SizedBox(
                              height: 25,
                            ),
                            Container(
                              width: screenWidth < 670
                                  ? 600 + (screenWidth - 670)
                                  : 600,
                              height: screenWidth < 670
                                  ? 600 + (screenWidth - 670)
                                  : 600,
                              decoration: BoxDecoration(
                                boxShadow: [
                                  BoxShadow(
                                    spreadRadius: 5,
                                    color: Colors.white.withOpacity(0.3),
                                  )
                                ],
                                shape: BoxShape.circle,
                              ),
                              child: Image.network(
                                  'https://static.igem.wiki/teams/4314/wiki/igemlogopurple.png'),
                            ),
                          ]),
                          Column(
                            mainAxisAlignment: MainAxisAlignment.start,
                            children: [
                              const SizedBox(height: 30),
                              ClipRect(
                                child: Align(
                                  alignment: Alignment.bottomLeft,
                                  widthFactor: 0.8,
                                  child: Container(
                                    height: 220 + 10,
                                    width: 220 + 10,
                                    decoration: BoxDecoration(
                                      gradient: LinearGradient(colors: [
                                        Colors.white.withOpacity(0.3),
                                        Colors.indigo.withOpacity(0.3),
                                      ]),
                                      shape: BoxShape.circle,
                                    ),
                                    alignment: Alignment.center,
                                    child: Image.network(
                                        width: 220,
                                        height: 220,
                                        'https://static.igem.wiki/teams/4314/wiki/igemlogopurple.png'),
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ],
                      ),
                    ),
                  ),
                ],
        ),
        SizedBox(height: screenWidth <= 600 ? 0 : 30),
        Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: MediaQuery.of(context).size.width < 1250
              ? [
                  Padding(
                    padding: EdgeInsets.symmetric(
                        horizontal: screenWidth < 400 ? 25 : 50),
                    child: const SelectableText(
                      'PROMOTIONAL VIDEO',
                      style: TextStyle(
                          fontFamily: 'rockabye',
                          fontSize: 40,
                          color: const Color(0xff34407c)),
                    ),
                  ),
                  MediaQuery.of(context).size.width < 840
                      ? Padding(
                          padding: EdgeInsets.symmetric(
                              horizontal: screenWidth < 400 ? 25 : 50),
                          child: Image.network(
                            'https://static.igem.wiki/teams/4314/wiki/tmp.png',
                          ),
                        )
                      : Stack(children: [
                          ClipRect(
                            child: Align(
                              alignment: Alignment.topRight,
                              widthFactor: 0.9,
                              child: SvgPicture.network(
                                'https://static.igem.wiki/teams/4314/wiki/wiki-element.svg',
                              ),
                            ),
                          ),
                          Padding(
                            padding: EdgeInsets.symmetric(
                                horizontal: screenWidth < 400 ? 25 : 50),
                            child: Image.network(
                              'https://static.igem.wiki/teams/4314/wiki/tmp.png',
                            ),
                          ),
                        ]),
                  Container(
                    margin: EdgeInsets.symmetric(
                        horizontal: screenWidth < 400 ? 25 : 50),
                    width: screenWidth < 400
                        ? screenWidth - 50
                        : screenWidth - 100,
                    child: const SelectableText(
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis gravida neque convallis a. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Faucibus nisl tincidunt eget nullam non nisi est sit. Mattis vulputate enim nulla aliquet.  ',
                      style: TextStyle(
                        fontFamily: 'helvetica',
                        color: Color(0xff34407c),
                        fontSize: 18,
                      ),
                      textAlign: TextAlign.left,
                    ),
                  ),
                ]
              : [
                  const Padding(
                    padding: EdgeInsets.only(left: 50),
                    child: SelectableText(
                      'PROMOTIONAL VIDEO',
                      style: TextStyle(
                          fontFamily: 'rockabye',
                          fontSize: 40,
                          color: Color(0xff34407c)),
                    ),
                  ),
                  Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Stack(children: [
                        ClipRect(
                          child: Align(
                            alignment: Alignment.topRight,
                            widthFactor: 0.9,
                            child: SvgPicture.network(
                              'https://static.igem.wiki/teams/4314/wiki/wiki-element.svg',
                            ),
                          ),
                        ),
                        Padding(
                          padding: const EdgeInsets.only(left: 50),
                          child: Image.network(
                            'https://static.igem.wiki/teams/4314/wiki/tmp.png',
                          ),
                        ),
                      ]),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.end,
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            Container(
                              margin: const EdgeInsets.only(right: 50),
                              width: MediaQuery.of(context).size.width / 4,
                              child: const SelectableText(
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis gravida neque convallis a. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Faucibus nisl tincidunt eget nullam non nisi est sit. Mattis vulputate enim nulla aliquet.  ',
                                style: TextStyle(
                                  fontFamily: 'helvetica',
                                  color: Color(0xff34407c),
                                  fontSize: 18,
                                ),
                                textAlign: TextAlign.right,
                              ),
                            ),
                            SizedBox(
                              height: 200 +
                                  0.25 *
                                      (MediaQuery.of(context).size.width -
                                          1440),
                            ),
                            ClipRect(
                              child: Align(
                                alignment: Alignment.bottomLeft,
                                widthFactor: 0.8,
                                child: SvgPicture.network(
                                  'https://static.igem.wiki/teams/4314/wiki/wiki-element2.svg',
                                  height: 200,
                                ),
                              ),
                            ),
                          ],
                        ),
                      )
                    ],
                  ),
                ],
        ),
        const SizedBox(height: 100),
        const BottomBar(),
      ]),
    );
  }
}
