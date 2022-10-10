import 'package:flutter/material.dart';

class NavBarButton extends StatelessWidget {
  final String pageName;
  const NavBarButton({required this.pageName, Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    String urlIndex = pageName.replaceAll(' ', '-');
    return TextButton(
      onPressed: () {
        Navigator.of(context)
            .pushNamed(pageName == 'home' ? '/' : '/$urlIndex');
      },
      child: Text(
        pageName.toUpperCase(),
        style: const TextStyle(
          color: Color(0xff303f7b),
          fontSize: 18,
        ),
      ),
    );
  }
}

class NavBarDDButton extends StatelessWidget {
  final String title;
  final Widget subpages;
  final String alignment;
  const NavBarDDButton(
      {required this.title,
      required this.subpages,
      this.alignment = 'left',
      Key? key})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return PopupMenuButton(
      offset:
          alignment == 'right' ? const Offset(15, 20) : const Offset(-15, 20),
      elevation: 0,
      position: PopupMenuPosition.under,
      itemBuilder: (context) => [
        PopupMenuItem(
          padding: EdgeInsets.zero,
          child: MouseRegion(
              onExit: (value) {
                Navigator.pop(context);
              },
              child: subpages),
        ),
      ],
      child: Row(crossAxisAlignment: CrossAxisAlignment.center, children: [
        Text(
          title.toUpperCase(),
          style: const TextStyle(
            color: Color(0xff303f7b),
            fontSize: 18,
          ),
        ),
      ]),
    );
  }
}

class NavBarTile extends StatelessWidget {
  final String pageName;
  final String alignment;
  const NavBarTile({required this.pageName, this.alignment = 'left', Key? key})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    String urlIndex = pageName.replaceAll(' ', '-');
    return ListTile(
      title: Text(
        pageName.toUpperCase(),
        style: const TextStyle(fontSize: 12),
        textAlign: alignment == 'right' ? TextAlign.right : TextAlign.left,
      ),
      onTap: () {
        Navigator.of(context)
            .pushNamed(pageName == 'home' ? '/' : '/$urlIndex');
        Navigator.of(context)
            .pushNamed(pageName == 'home' ? '/' : '/$urlIndex');
      },
    );
  }
}
