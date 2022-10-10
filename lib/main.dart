import 'package:flutter/material.dart';
import 'package:igem/pages/description.dart';
import 'package:url_strategy/url_strategy.dart';

import 'pages/circular_dna.dart';
import 'pages/contribution.dart';
import 'pages/design.dart';
import 'pages/educational_outreach.dart';
import 'pages/engineering.dart';
import 'pages/gene_sequence.dart';
import 'pages/implementation.dart';
import 'pages/integrated_human_practices.dart';
import 'pages/partnership.dart';
import 'pages/parts_collection.dart';
import 'pages/attributions.dart';
import 'pages/members.dart';
import 'pages/notebook.dart';
import 'pages/results.dart';
import 'pages/collaborations.dart';
import 'pages/home.dart';
import 'pages/safety.dart';

void main() {
  setPathUrlStrategy();
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      // Remove the debug banner
      debugShowCheckedModeBanner: false,
      title: 'Thailand_RIS',
      theme: ThemeData(fontFamily: 'DrukWide'),
      initialRoute: '/',
      routes: {
        '/': (context) => const HomePage(),
        '/attributions': (context) => const Attributions(),
        '/circular-dna': (context) => const CircularDNA(),
        '/collaborations': (context) => const Collab(),
        '/contribution': (context) => const Contribution(),
        '/description': (context) => const Description(),
        '/design': (context) => const Design(),
        '/educational-outreach': (context) => const EducationalOutreach(),
        '/engineering': (context) => const Engineering(),
        '/gene-sequence': (context) => const GeneSequence(),
        '/implementation': (context) => const Implementation(),
        '/integrated-human-practices': (context) => const IntegratedHP(),
        '/members': (context) => const Members(),
        '/notebook': (context) => const Notebook(),
        '/partnership': (context) => const Partnership(),
        '/parts-collection': (context) => const PartsCollection(),
        '/results': (context) => const Results(),
        '/safety': (context) => const Safety(),
      },
    );
  }
}
